import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <div style="margin: 20px">
      <a
        *ngFor="let el of pages"
        [ngClass]="{ active: active == el }"
        (click)="active = el"
      >
        {{ el }}</a
      >
    </div>
  `,
  styles: [],
})
export class HelloComponent {
  @Input() page: number = 1;

  active = this.page;

  pages;

  constructor() {
    this.pages = Array(5)
      .fill(0)
      .map((x, i) => i);
    this.pages.pop();
  }

  get currentPage() {
    return this.active;
  }
}
