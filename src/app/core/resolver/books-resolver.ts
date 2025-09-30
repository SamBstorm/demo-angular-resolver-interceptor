import { ResolveFn } from '@angular/router';
import { IBook } from '../../features/models/ibook';
import { BooksFakeApi } from '../../features/services/books-fake-api';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const booksResolver: ResolveFn<IBook[]> = (route, state) => {
  const service = inject(BooksFakeApi);
  return service.getAll().pipe(
    tap(
      (response) => console.log('Resolver called : ' + response.length + ' datas.')    
    )
  );
};

export const bookResolver: ResolveFn<IBook> = (route, state) => {
  const service = inject(BooksFakeApi);
  const id = route.params['id'];
  return service.get(id).pipe(
    tap(
      (response) => console.log('Resolver called : book with id ' + id + ' loaded.')    
    )
  );
}
