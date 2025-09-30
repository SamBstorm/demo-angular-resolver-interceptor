import { Component, inject, OnInit } from '@angular/core';
import { IBook } from '../../../models/ibook';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-books-list',
  imports: [DatePipe, RouterLink],
  templateUrl: './books-list.html',
  styleUrl: './books-list.scss'
})
export class BooksList implements OnInit {
  public books! : IBook[];
  private _activatedRoute : ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.books = this._activatedRoute.snapshot.data['booksData'];
  }
}
