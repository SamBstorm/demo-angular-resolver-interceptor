import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'books',
        pathMatch  : 'full'
    },
    {
        path : 'addBook',
        redirectTo : 'books/create',
        pathMatch  : 'full'
    },
    {
        path : 'books', 
        loadChildren: 
            ()=> import("./features/pages/books/books.routes").then( r =>r.routes )
    },
    {
        path : 'notFound',
        loadComponent :
            () => import("./shared/pages/not-found/not-found").then( c => c.NotFound )
    },
    {
        path : 'login',
        loadComponent : () => import('./features/pages/login/login').then(c => c.Login)
    },
    {
        path : 'logout',
        loadComponent : () => import('./features/pages/logout/logout').then(c => c.Logout)
    },
    {
        path : 'register',
        loadComponent : () => import('./features/pages/register/register').then(c => c.Register)
    },
    {
        path : '**',
        redirectTo : 'notFound'
    }
];
