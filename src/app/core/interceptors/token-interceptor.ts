import { HttpInterceptorFn } from '@angular/common/http';
import { Auth } from '../services/auth';
import { inject } from '@angular/core';
import { IToken } from '../models/itoken';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const _auth : Auth = inject(Auth);
  const currentUser : IToken | null = _auth.currentUser();
  try{
    if(!currentUser) throw new Error('Aucun utilisateur connecté.');
    const newRequest = req.clone({
      headers : req.headers.set('Authorization', 'Bearer '+currentUser.accessToken)
    });
    return next(newRequest);
  }
  catch (e : any){
    console.log(e.message);    
    return next(req);
  }
};
