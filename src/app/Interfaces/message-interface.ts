import { UserInterface } from "./user-interface";

export interface MessageInterface {
  id: string;
  content: string;
  sendingTime: Date;
  senderId: UserInterface;
  chatId: string;
}
