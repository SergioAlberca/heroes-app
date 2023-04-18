import { HeroeService } from 'src/app/services/heroe/heroe.service';
import { Heroe } from '../models/heroe';
import { Observable } from 'rxjs';
import { IHeroeRepository } from '../../domain/interfaces/heroe.repository';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroeRepository implements IHeroeRepository {
  constructor(private mockServer: HeroeService) {}
  heroes(): Observable<Heroe[]> {
    return this.mockServer.getAll();
  }
}
