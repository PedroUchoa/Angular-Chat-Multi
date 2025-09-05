import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  imports: [],
  templateUrl: './chat-box.html',
  styleUrl: './chat-box.css'
})
export class ChatBox {

  @Input() serverName: string | undefined;

}
