import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IBook } from '../models/ibook';

@Injectable({
  providedIn: 'root'
})
export class BooksFakeApi {
  private _http : HttpClient = inject(HttpClient);
  private _apiUrlBooks : string = environment.apiUrl + 'books/';

  public getAll() : Observable<IBook[]>{
    return this._http.get<IBook[]>(this._apiUrlBooks);
  }

  public get(id : number) : Observable<IBook>{
    return this._http.get<IBook>(this._apiUrlBooks + id);
  }

  public post(book : IBook) : Observable<IBook>{
    return this._http.post<IBook>(this._apiUrlBooks, book);
  }
}
