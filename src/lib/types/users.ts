export interface IUser {
  id: number;
  firstName: string;
}

export interface IUsersResponse {
  total: number;
  users: IUser[];
}
