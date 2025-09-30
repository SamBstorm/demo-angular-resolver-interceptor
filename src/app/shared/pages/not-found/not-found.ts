import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})
export class NotFound implements OnInit, OnDestroy{
  public timer : number = 5;
  private _router : Router = inject(Router);
  private _interval? : number;
  
  ngOnInit(): void {
    this._interval = setInterval( () => 
      {
        this.timer--;
        if(this.timer == 0){
          this._router.navigateByUrl('/');
        }
      },
      1000
    );
  }

  ngOnDestroy(): void {
    clearInterval(this._interval);
    this._interval = undefined;
  }
}
