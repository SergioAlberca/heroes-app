// Angular imports
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { selectHandler } from './mock-server.config';

@Injectable()
export class HttpMockServerApiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const mockEndpointHandler = selectHandler(request);
    return mockEndpointHandler
      ? mockEndpointHandler(request)
      : next.handle(request);
  }
}
