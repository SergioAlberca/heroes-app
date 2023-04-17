import { NgModule } from '@angular/core';

import { HeroeService } from './heroe/heroe.service';
import { MockServerModule } from '../mock-server/mock-server.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [MockServerModule, HttpClientModule],
  providers: [HeroeService],
})
export class ServiceModule {}
