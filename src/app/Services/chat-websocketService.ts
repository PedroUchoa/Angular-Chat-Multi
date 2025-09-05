import { Injectable } from '@angular/core';
import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { MessageInterface } from '../Interfaces/message-interface';

@Injectable({
  providedIn: 'root',
})
export class ChatWebsocket {
  private stompClient!: Client;

  connect(serverId: string, onMessage: (msg: any) => void) {
    this.stompClient = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
      reconnectDelay: 5000,
      debug: (msg) => console.log(msg),
    });

    this.stompClient.onConnect = () => {
      console.log('Conectado');

      this.stompClient.subscribe(
        `/topic/chat/${serverId}`,
        (message: IMessage) => {
          if (message.body) {
            const parsedMessage = JSON.parse(message.body);
            onMessage(parsedMessage);
          }
        }
      );
    };
    this.stompClient.activate();
  }

  sendMessage(serverId: string|undefined, senderId: any, content: any) {
    if (this.stompClient && this.stompClient.connected) {
      const message = { content, senderId };
      this.stompClient.publish({
        destination: `/app/chat/${serverId}/sendMessage`,
        body:JSON.stringify(message)
      });
    }
  }

  disconnect(){
    if(this.stompClient){
      this.stompClient.deactivate();
    }
  }


}
