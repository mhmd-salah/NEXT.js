
export interface IComment {
  id: number;
  body: string;
  postId: number;
}

export interface ICommentsResponse {
  total: number;
  comments: IComment[];
}
