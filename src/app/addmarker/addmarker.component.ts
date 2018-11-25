import { Component } from '@angular/core';
declare const google: any;
import { Router } from '@angular/router';

@Component({
  selector: 'app-appmarker',
  templateUrl: './addmarker.component.html',
  styleUrls: ['./addmarker.component.css']
})
export class AddmarkerComponent {

  constructor(private router:Router){
  }

  noRamp($event: MouseEvent) {
     var icon = "../assets/Group 54.png";
     this.router.navigate(['/dashboard',{ icon: icon }]);
  };

  withRamp($event: MouseEvent) {
    var icon = "../assets/Group 48.png";
    this.router.navigate(['/dashboard',{ icon: icon }]);
  };

  noParking($event: MouseEvent) {
     var icon = "../assets/Group 54.png";
     this.router.navigate(['/dashboard',{ icon: icon }]);
  };

  withParking($event: MouseEvent) {
    var icon = "../assets/Group 48.png";
    this.router.navigate(['/dashboard',{ icon: icon }]);
  };

  goback($event: MouseEvent) {
    this.router.navigate(['/dashboard']);
  };

}
