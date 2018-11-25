import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare const google: any;



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {



  constructor(private router: Router) {

  }


    loginInto($event: MouseEvent){
      this.router.navigate(['/dashboard']);


    }


}
