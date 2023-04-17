import { Observable } from 'rxjs';
import { HeroeRepository } from '../../data/repositories/heroe.repository';
import { Heroe } from '../models/heroe';

export class GetHeroesUseCase {
  constructor(private heroesRepository: HeroeRepository) {}
  async execute(): Promise<Observable<Heroe[]>> {
    return this.heroesRepository.heroes();
  }
}
