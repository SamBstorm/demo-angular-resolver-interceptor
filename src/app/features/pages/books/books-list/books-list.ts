import { Component, inject, OnInit } from '@angular/core';
import { IBook } from '../../../models/ibook';
import { BooksFakeApi } from '../../../services/books-fake-api';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-books-list',
  imports: [JsonPipe],
  templateUrl: './books-list.html',
  styleUrl: './books-list.scss'
})
export class BooksList implements OnInit {
  public books! : IBook[];
  private _bookService : BooksFakeApi = inject(BooksFakeApi);

  ngOnInit(): void {
    this._bookService.getAll().subscribe({
      next : (datas) => this.books = datas,
      error : (err) => console.error(err)
    });
  }
}
