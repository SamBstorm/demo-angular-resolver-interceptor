import { Routes } from "@angular/router";
import { Books } from "./books";
import { BooksList } from "./books-list/books-list";
import { BooksCreate } from "./books-create/books-create";
import { BooksEdit } from "./books-edit/books-edit";
import { BooksDetails } from "./books-details/books-details";
import { BooksDelete } from "./books-delete/books-delete";

export const routes : Routes = [
    { path : '', component : Books, children : [
        {path : '', redirectTo : 'index', pathMatch : "full"},
        {path : 'index', component : BooksList },
        {path : 'create', component : BooksCreate },
        {path : 'edit/:id', component : BooksEdit },
        {path : 'details/:id', component : BooksDetails },
        {path : 'delete/:id', component : BooksDelete }
    ]}
];