import { UserInterface } from "./user-interface";

export interface MessageInterface {
  id: string;
  content: string;
  sendindTime: Date;
  senderId:UserInterface,
  chatId:string
}
