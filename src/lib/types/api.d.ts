// export type ApiResult<T> =
//   | { success: true; data: T }
//   | { success: false; error: string };

// // interface ApiSuccess<T> {
// //   success: true;
// //   data: T;
// // }

// // interface ApiError {
// //   success: false;
// //   error: string;
// // }

// // export type TApiResult<T> = ApiSuccess<T> | ApiError;

// export interface ApiResponse<T> {
//   [key: string]: T | number;
//   total: number;
// }

declare interface IErrorResponse {
  status: false;
  code: number;
  message: string;
  errors?: Array<{
    path: string;
    message: string;
  }>;
}

declare interface ISuccessResponse<T> {
  status: true;
  code: number;
  message?: string;
  payload?: T;
}

declare type ApiResponse<T> = IErrorResponse | ISuccessResponse<T>;
