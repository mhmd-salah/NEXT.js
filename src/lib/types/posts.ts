export interface IPosts {
  id: number;
  title: string;
  tags: string[];
}

export interface IApiPostsResponse {
  posts: IPosts[];
  total: number;
}
