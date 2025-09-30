import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private _auth: Auth = inject(Auth);
  private _fb: FormBuilder = inject(FormBuilder);
  private _router : Router = inject(Router);

  public formRegister: FormGroup;
  public notifMsg? : string;

  public constructor() {
    this.formRegister = this._fb.group({
      email: [
        null,
        [
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320),
        ],
      ],
      password: [
        null,
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@\-=+_#&§$%£µ])\S{8,64}$/
          ),
        ],
      ],
      firstname: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(64),
        ],
      ],
      lastname: [
        null,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(64),
        ],
      ],
    });
  }

  public onSubmit(): void {
    try {
      if (!this.formRegister.valid) throw new Error('Formulaire invalide');
      this._auth.register({
        email : this.formRegister.controls['email'].value,
        lastname : this.formRegister.controls['lastname'].value,
        firstname : this.formRegister.controls['firstname'].value,
        password : this.formRegister.controls['password'].value,
        createdAt : new Date()
      }).subscribe({
        next : (data) => console.log(data),
        error : (err) => {
          console.error(err);
          throw new Error('Erreur de communication avec la base de donnée.');
        }
      });
      this._router.navigateByUrl('/');
    } catch (e : any) {
      this.notifMsg = e.message;
    }
  }
}
