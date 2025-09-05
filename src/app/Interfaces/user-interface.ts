import { MinChat } from "./min-chat";
import { ServerInterface } from "./serverInterface";

export interface UserInterface {
  id:string,
  name:string,
  isActive:boolean,
  chatServers:MinChat[]
}
