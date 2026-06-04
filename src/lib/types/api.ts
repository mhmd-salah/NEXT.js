export type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };

// interface ApiSuccess<T> {
//   success: true;
//   data: T;
// }

// interface ApiError {
//   success: false;
//   error: string;
// }

// export type ApiResult<T> = ApiSuccess<T> | ApiError;

export interface ApiResponse<T> {
  [key: string]: T | number;
  total: number;
}
