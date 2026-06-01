export interface IPosts {
  id: number;
  title: string;
}

export interface IApiPostsResponse {
  posts: IPosts[];
  total: number;
}
