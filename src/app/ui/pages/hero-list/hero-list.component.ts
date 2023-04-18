import { Component, OnInit } from '@angular/core';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';
import { Heroe } from 'src/app/core/heroes/domain/models/heroe';
import { GetHeroesUseCase } from 'src/app/core/heroes/domain/use_cases/get_heroes.use_case';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  heroes: Heroe[];
  itemsPerPage = 10;
  page = 1;

  constructor(private getHeroesUsecCase: GetHeroesUseCase) {
    this.heroes = [];
  }

  ngOnInit(): void {
    this.getHeroesUsecCase.execute().subscribe((res) => {
      this.heroes = res;
    });
  }
}
