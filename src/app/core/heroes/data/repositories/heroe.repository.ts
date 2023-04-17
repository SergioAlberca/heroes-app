import { HeroeService } from 'src/app/services/heroe/heroe.service';
import { Heroe } from '../models/heroe';
import { Observable } from 'rxjs';
import { IHeroeRepository } from '../../domain/interfaces/heroe.repository';

export class HeroeRepository implements IHeroeRepository {
  constructor(private mockServer: HeroeService) {}
  async heroes(): Promise<Observable<Heroe[]>> {
    return this.mockServer.getAll();
  }
}
