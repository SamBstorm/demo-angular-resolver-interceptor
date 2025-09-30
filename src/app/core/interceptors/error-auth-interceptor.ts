import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Auth } from '../services/auth';

export const errorAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const _router : Router = inject(Router);
  const _auth : Auth = inject(Auth);

  return next(req).pipe(
    catchError( (error : HttpErrorResponse) =>{
      if(error.status == 401){
        if(_auth.currentUser()){
          _auth.logout();
        }
        _router.navigateByUrl('/login');
        return throwError(() => new Error('Non autorisé.'));
      }
      return throwError(() => error);
    })
  );
};
