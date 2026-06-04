export interface IUser {
  id: number;
  name: string;
}

export interface IUsersResponse {
  total: number;
  users: IUser[];
}
