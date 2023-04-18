import { Observable } from 'rxjs';
import { Heroe } from '../models/heroe';

export interface IHeroeRepository {
  heroes(): Observable<Heroe[]>;
}
