import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PaginationPipe } from './pages/hero-list/pagination.pipe';
import { HelloComponent } from './pages/hero-list/components/pagination.component';

@NgModule({
  declarations: [HeroListComponent, PaginationPipe, HelloComponent],
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class UiModule {}
