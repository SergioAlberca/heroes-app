import { NgModule } from '@angular/core';
import { ServiceModule } from '../services/service.module';
import { GetHeroesUseCase } from './heroes/domain/use_cases/get_heroes.use_case';

@NgModule({
  imports: [ServiceModule],
  providers: [GetHeroesUseCase],
  exports: [],
})
export class CoreModule {}
