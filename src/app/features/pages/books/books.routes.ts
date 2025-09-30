import { Routes } from "@angular/router";
import { Books } from "./books";
import { BooksList } from "./books-list/books-list";
import { BooksCreate } from "./books-create/books-create";
import { BooksEdit } from "./books-edit/books-edit";
import { BooksDetails } from "./books-details/books-details";
import { BooksDelete } from "./books-delete/books-delete";
import { bookResolver, booksResolver } from "../../../core/resolver/books-resolver";

export const routes : Routes = [
    { path : '', component : Books, children : [
        {path : '', redirectTo : 'index', pathMatch : "full"},
        {
            path : 'index',
            component : BooksList,
            resolve : {
                booksData : booksResolver
            }
        },
        {path : 'create', component : BooksCreate },
        {
            path : 'edit/:id', 
            component : BooksEdit,
            resolve : {
                bookData : bookResolver
            }
         },
        {
            path : 'details/:id',
            component : BooksDetails,
            resolve : {
                bookData : bookResolver
            }
         },
        {path : 'delete/:id', component : BooksDelete }
    ]}
];