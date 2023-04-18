import { Routes } from '@angular/router';
import { HeroListComponent } from '../ui/pages/hero-list/hero-list.component';

export const appRoutes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];
