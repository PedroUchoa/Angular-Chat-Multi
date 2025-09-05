import { MinMessage } from "./min-message"
import { MinUser } from "./min-user"

export interface ServerInterface {
  id: string,
  name: string,
  image:string,
  startDate:Date,
  endDate:Date,
  isActive:boolean
  users:MinUser[],
  listMessages:MinMessage[]
}
