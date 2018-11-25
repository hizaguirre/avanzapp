import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare const google: any;



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {


  constructor(private router: Router) {

  }


    loginInto($event: MouseEvent){
      this.router.navigate(['/dashboard']);


    }


}
