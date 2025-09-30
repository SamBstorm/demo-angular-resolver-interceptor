import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable, tap } from 'rxjs';
import { IUser } from '../models/iuser';
import { ILogin } from '../models/ilogin';
import { IToken } from '../models/itoken';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private _http : HttpClient = inject(HttpClient);
  public currentUser : WritableSignal<IToken | null> = signal(
    JSON.parse(
      localStorage.getItem('currentUser') ?? 'null'
    )
  );

  private refreshCurrentUser() : void{
    this.currentUser.set(
      JSON.parse(
        localStorage.getItem('currentUser') ?? 'null'
      )
    );
  }

  public register(user : IUser) : Observable<IToken> {
    return this._http.post<IToken>(environment.apiUrl+'register/', user).pipe(
      tap({
        next : (response) => {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.refreshCurrentUser();
        },
        error: (err) => {throw err;}
      })
    );
  }
  
  public login(user : ILogin) : Observable<IToken> {
    return this._http.post<any>(environment.apiUrl+'login/', user).pipe(
      tap({
        next : (response) => {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.refreshCurrentUser();
        },
        error: (err) => {throw err;}
      })
    );
  }

  public logout() : void{
    localStorage.removeItem('currentUser');
    this.refreshCurrentUser();
  }
}
