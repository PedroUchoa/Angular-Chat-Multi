import { ServerInterface } from './../../Interfaces/serverInterface';
import { ChatApi } from '../../Services/chat-apiService';
import { CommonModule } from '@angular/common';
import { ChatBox } from './../../Components/chat-box/chat-box';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
} from '@angular/core';
import { ServerSearch } from '../../Components/server-search/server-search';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../Services/user-service';
import { UserInterface } from '../../Interfaces/user-interface';
import { ChatWebsocket } from '../../Services/chat-websocketService';
import { MinChat } from '../../Interfaces/min-chat';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chat-page',
  imports: [ChatBox, CommonModule, ServerSearch, ReactiveFormsModule],
  templateUrl: './chat-page.html',
  styleUrl: './chat-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatPage {
  modalCreate = false;
  modalSearch = false;
  selectedChatRoom: ServerInterface | null = null;
  modalValue: string | null = null;
  activedUser: UserInterface | null = null;
  userToken: string | null = null;

  createServerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });

  messageForm = new FormGroup({
    content: new FormControl('', Validators.required),
  });

  servers: ServerInterface[] = [];
  allServers: ServerInterface[] = [];

  constructor(
    private chatApi: ChatApi,
    private userApi: UserService,
    private websocket: ChatWebsocket,
    private cdRef: ChangeDetectorRef,
    private toastr:ToastrService
  ) {}

  ngOnInit() {
    this.userToken = this.returnToken();
    this.testeUsers();
  }

  openModalCreate() {
    this.modalCreate = true;
  }

  closeModalCreate() {
    this.modalCreate = false;
  }

  openModalSearch() {
    this.modalSearch = true;
    this.getAllServer();
  }

  closeModalSearch() {
    this.modalSearch = false;
  }

  getAllServer() {
    this.chatApi.getAllServer().subscribe({
      next: (data) => {
        this.allServers = data.content;
        this.cdRef.detectChanges();
      },
      error: (err) => alert(err),
    });
  }

  chatOpen(room: MinChat) {
    this.websocket.disconnect();
    this.chatApi.getServerById(room.id).subscribe({
      next: (data) => {
        Promise.resolve().then(() => {
          this.selectedChatRoom = data;
          this.cdRef.detectChanges();
        });
      },
      error: (err) => console.error(err),
    });

    this.modalValue = room.id;

    this.websocket.connect(room.id, (msg) => {
      Promise.resolve().then(() => {
        this.selectedChatRoom?.listMessages.unshift(msg);
        this.cdRef.detectChanges();
      });
    });
  }

  sendMessage() {
    if (!this.selectedChatRoom?.id || !this.messageForm.value.content) {
      return;
    }

    this.websocket.sendMessage(
      this.selectedChatRoom?.id,
      this.activedUser?.id,
      this.messageForm.value.content
    );
    this.messageForm.reset();
    this.cdRef.detectChanges();
  }

  createServer() {
    this.chatApi
      .createServer(
        this.createServerForm.value.name,
        this.createServerForm.value.image,
        this.activedUser?.id
      )
      .subscribe({
        next: (response) => {
          this.allServers.push(response);
          this.activedUser?.chatServers.push(response);
          this.cdRef.detectChanges();
        },
        error: (err) => {
          console.log(err)
          this.toastr.warning(err.error.message);
        },
      });
    this.closeModalCreate();
    this.createServerForm.reset();
  }

  testeUsers() {
    this.userApi.getUserByTokenJWT(this.userToken).subscribe({
      next: (data) => {
        this.activedUser = data;
        this.cdRef.detectChanges();
      },
      error: (err) => null,
    });
  }

  addUserToServer(data: ServerInterface) {
    this.chatApi.addUserToServer(data.id, this.activedUser?.id).subscribe({
      next: (response) => {
        this.activedUser?.chatServers.push(response);
        this.cdRef.detectChanges();
      },
      error: (err) => {
        this.toastr.warning(err.error.message);
      },
    });
  }

  closeConnection() {
    this.modalValue = null;
    this.websocket.disconnect();
  }

  returnToken() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      return sessionStorage.getItem('token');
    }
    return null;
  }

  ngOnDestroy() {
    this.websocket.disconnect();
  }
}
