import { IUser } from "./users";

export interface ILoginResponse {
  token: string;
  user: IUser;
  status?:boolean
  massage?:string
}

export interface ILoginFields {
  username: string;
  password: string;
}
