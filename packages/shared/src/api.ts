export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatationQuery {
  limit?: number;
  cursor?: string;
}
