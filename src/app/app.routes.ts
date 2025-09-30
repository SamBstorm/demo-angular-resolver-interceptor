import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'books',
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
        path : '**',
        redirectTo : 'notFound'
    }
];
