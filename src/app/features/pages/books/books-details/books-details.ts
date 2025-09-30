import { Component, inject, OnInit } from '@angular/core';
import { IBook } from '../../../models/ibook';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-books-details',
  imports: [DatePipe, RouterLink],
  templateUrl: './books-details.html',
  styleUrl: './books-details.scss'
})
export class BooksDetails implements OnInit {
  public book! : IBook;
  private _actRoute : ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.book = this._actRoute.snapshot.data['bookData'];
  }
}
