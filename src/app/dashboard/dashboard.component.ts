import { Component } from '@angular/core';
declare const google: any;
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'hsquare';
  zoom: number = 15;
  lat: number = 0;
  lng: number = 0;

  icon: string = "";


  markers: marker[] = [
    {lat: -33.4311178, draggable: true, lng: -70.6270161, type: 'ramp', icon: '../assets/Group 48.png'},
    {lat: -33.4304772, draggable: false, lng: -70.6279206, type: 'ramp', icon: '../assets/Group 54.png'},
    {lat: -33.4326936, draggable: false, lng: -70.6299705, type: 'ramp', icon: '../assets/Group 48.png'},
    {lat: -33.4344362, draggable: false, lng: -70.6338622, type: 'ramp', icon: '../assets/Group 48.png'},
    {lat: -33.4347322, draggable: false, lng: -70.6355501, type: 'ramp', icon: '../assets/Group 48.png'},
    {lat: -33.4334882, draggable: false, lng: -70.6357879, type: 'ramp', icon: '../assets/Group 48.png'},
    {lat: -33.4332914, draggable: false, lng: -70.6358047, type: 'ramp', icon: '../assets/Group 48.png'},
    {lat: -33.4321149, draggable: false, lng: -70.6360015, type: 'ramp', icon: '../assets/Group 48.png'},
    {lat: -33.4308447, draggable: false, lng: -70.6356992, type: 'ramp', icon: '../assets/Group 48.png'},
    {lat: -33.4331186, draggable: false, lng: -70.6347731, type: 'ramp', icon: '../assets/Group 48.png'},
    {lat: -33.4326011, draggable: false, lng: -70.6334787, type: 'ramp', icon: '../assets/Group 48.png'},
    {lat: -33.4298285, draggable: false, lng: -70.629363, type: 'parking', icon: '../assets/Group 54.png'},
    {lat: -33.4327514, draggable: false, lng: -70.6280095, type: 'ramp', icon: '../assets/Group 48.png'},
    {lat: -33.433207, draggable: false, lng: -70.6286788, type: 'ramp', icon: '../assets/Group 48.png'},
    ];



  searchBox: any;
  map: any;

  mapReady(event: any) {
      this.map = event;
      const input = document.getElementById('Map-Search');
      //this.searchBox = new google.maps.places.SearchBox(input);

      const reportButton = document.getElementById('Settings')
      const report = this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM]
      report.push(reportButton);
      report.addListener('click', function() {console.log('button'); });
      google.maps.event.addListener(report, 'click', function alert() {console.log('button'); });
      // this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById('Profile'));
      this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
      // this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(document.getElementById('Logout'));

      //this.searchBox.addListener('places_changed', () => this.goToSearchedPlace());


  }

  buttonClick($event: MouseEvent) {
    this.router.navigate(['/addmarker']);
  }

  goToSearchedPlace(){
        const places = this.searchBox.getPlaces();
        if (places.length === 0) {
        return;
        }
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
        if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
        } else {
            bounds.extend(place.geometry.location);
        }
        });
        this.map.fitBounds(bounds);
    }



  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.queryParams);






    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.showPosition(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

    ngOnInit() {
               this.activatedRoute.params.subscribe(paramsId => {
                   this.icon = paramsId.icon;
               });
      console.log(this.icon);


            }

  mapClicked($event: MouseEvent) {

    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true,
      icon: '../assets/Group 48.png'
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  showPosition(position) {
    console.log('Show');
    console.log(position);
    console.log(this.icon);
    if (this.icon) {
      this.markers.push({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      icon: this.icon,
      draggable: false
    });


    } else {
      {
      this.markers.push({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      draggable: false
    });
    }


    // let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


  }



}
