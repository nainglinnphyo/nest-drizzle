export interface IException {
  message: string;
  code?: number;
  cause?: Error;
  description?: string;
}

export interface IHttpBadRequestExceptionResponse {
  _meta: {
    code: number;
    message: string;
    description: string;
    timestamp: string;
    traceId: string;
  };
}

export interface IHttpInternalServerErrorExceptionResponse {
  _meta: {
    code: number;
    message: string;
    description: string;
    timestamp: string;
    traceId: string;
  };
}

export interface IHttpUnauthorizedExceptionResponse {
  _meta: {
    code: number;
    message: string;
    description: string;
    timestamp: string;
    traceId: string;
  };
}

export interface IHttpForbiddenExceptionResponse {
  _meta: {
    code: number;
    message: string;
    description: string;
    timestamp: string;
    traceId: string;
  };
}
