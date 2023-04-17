import { HttpRequest } from '@angular/common/http';

export const extractIdPathParamFromUrl = <T>(request: HttpRequest<T>) => {
  const requestUrl = new URL(request.url);
  return requestUrl.pathname.split('/').pop();
};
