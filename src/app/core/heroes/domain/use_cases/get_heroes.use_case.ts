import { Observable } from 'rxjs';
import { HeroeRepository } from '../../data/repositories/heroe.repository';
import { Heroe } from '../models/heroe';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetHeroesUseCase {
  constructor(private heroesRepository: HeroeRepository) {}
  execute(): Observable<Heroe[]> {
    return this.heroesRepository.heroes();
  }
}
