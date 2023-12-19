import { HttpStatus } from '@nestjs/common';

export interface IResponseMetadata {
  statusCode?: HttpStatus;
  message?: string;
}

export interface IResponse {
  _metadata?: IResponseMetadata;
  _data?: Record<string, any>;
}

export interface IResponsePaging {
  _metadata?: IResponseMetadata;
  _pagination: IResponsePagingPagination;
  _data: Record<string, any>[];
}

export interface IResponsePagingPagination {
  totalPage: number;
  total: number;
}
