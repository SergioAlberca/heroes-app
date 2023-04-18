import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Heroe } from 'src/app/mock-server/model/heroe.model';

@Injectable({
  providedIn: 'root',
})
export class HeroeService {
  private baseUrl = 'http://localhost:8000/heroes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Heroe[]> {
    return this.http.get<any>(this.baseUrl);
  }

  get(id: string): Observable<Heroe> {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  create(country: Heroe) {
    return this.http.post<any>(this.baseUrl, country);
  }

  update(id: string, country: Heroe): Observable<Heroe> {
    return this.http.put<any>(this.baseUrl + '/' + id, country);
  }

  delete(id: string) {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
}
