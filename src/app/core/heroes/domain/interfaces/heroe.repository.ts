import { Observable } from 'rxjs';
import { Heroe } from '../models/heroe';

export interface IHeroeRepository {
  heroes(): Promise<Observable<Heroe[]>>;
}
