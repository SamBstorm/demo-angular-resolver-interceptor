import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BooksFakeApi } from '../../../services/books-fake-api';

@Component({
  selector: 'app-books-create',
  imports: [ReactiveFormsModule],
  templateUrl: './books-create.html',
  styleUrl: './books-create.scss'
})
export class BooksCreate {

  private _fb : FormBuilder = inject(FormBuilder);
  private _bookService : BooksFakeApi = inject(BooksFakeApi);

  public formCreateBook : FormGroup = this._fb.group({
    title : [null, [Validators.required]],
    description : [null, [Validators.required]],
    isbn : [null, [Validators.required]],
    author : [null, [Validators.required]],
    releaseDate : [null, [Validators.required]]
  });

  public onSubmit() : void {
    try {
      if(!this.formCreateBook.valid) throw new Error('Formulaire invalide');
      this._bookService.post({
        id : 0,
        title : this.formCreateBook.controls['title'].value,
        description : this.formCreateBook.controls['description'].value,
        author : this.formCreateBook.controls['author'].value,
        isbn : this.formCreateBook.controls['isbn'].value,
        releaseDate : this.formCreateBook.controls['releaseDate'].value
      }).subscribe(
        {
          next: (data) => console.log(data),
          error : (err) => {
            console.error(err);
            //mettre un tthrow pour personnaliser l'erreur
            }
        }
      )
    } catch (error) {
      
    }
  }

}
