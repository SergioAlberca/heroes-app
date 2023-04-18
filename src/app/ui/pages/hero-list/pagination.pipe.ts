import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pagination' })
export class PaginationPipe implements PipeTransform {
  transform<T>(value: T[], page: number): T[] {
    console.log(value, page, ...value.slice(12 * (page - 1), 12 * page));
    return [...value.slice(12 * page, 12 * (page + 1))];
  }
}
