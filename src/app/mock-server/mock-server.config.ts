import { of } from 'rxjs';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import * as data from '../../assets/mock-server/mock-server-data.json';
import { Heroe } from './model/heroe.model';
import { extractIdPathParamFromUrl } from './utils/utils';

let heroes: Heroe[] = (data as any).default;

const getHeroes = () => {
  return of(
    new HttpResponse({
      status: 200,
      body: heroes,
    })
  );
};

const getFilteredHeroes = <T>(request: HttpRequest<T>) => {
  const filter = extractIdPathParamFromUrl(request);
  const heroe = filter ? heroes.find((h) => h.name.includes(filter)) : [];
  return of(
    new HttpResponse({
      status: 200,
      body: heroe,
    })
  );
};

const addHeroe = <T>(request: HttpRequest<T>) => {
  const heroe = request.body as Heroe;
  heroes.push(heroe);
  return of(
    new HttpResponse({
      status: 201,
      body: heroe,
    })
  );
};

const editHeroe = <T>(request: HttpRequest<T>) => {
  const id = extractIdPathParamFromUrl(request);
  const heroeIndex = heroes.findIndex((c) => c.id.toString() === id);
  const heroe = request.body as Heroe;
  heroes[heroeIndex] = heroe;
  return of(
    new HttpResponse({
      status: 200,
      body: heroe,
    })
  );
};

const removeHeroe = <T>(request: HttpRequest<T>) => {
  const id = extractIdPathParamFromUrl(request);
  heroes = heroes.filter((c) => c.id.toString() !== id);
  return of(
    new HttpResponse({
      status: 204,
    })
  );
};

export const selectHandler = <T>(request: HttpRequest<T>) => {
  const requestUrl = new URL(request.url);
  const getOneRegexp: RegExp = new RegExp(`/heroes/[0-9a-zA-Z]+`);
  switch (request.method) {
    case 'GET':
      const pathname = requestUrl.pathname;
      if (pathname === '/heroes') {
        return getHeroes;
      } else if (getOneRegexp.test(pathname)) {
        return getFilteredHeroes;
      } else {
        return null;
      }
    case 'POST':
      return addHeroe;
    case 'PUT':
      return editHeroe;
    case 'DELETE':
      return removeHeroe;
    default:
      return null;
  }
};
