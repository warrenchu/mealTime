import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { YelpServiceService } from '../service/yelp-service.service';

@Component({
  selector: 'app-find-restaurants-near-me',
  templateUrl: './find-restaurants-near-me.component.html',
  styleUrls: ['./find-restaurants-near-me.component.css']
})
export class FindRestaurantsNearMeComponent implements OnInit {
  cuisine: string = "";
  location: string = "";
  priceRange: number = 1;
  limit: number = 5;
  result: any[] = [];
  radius: number = 5;

  constructor(private _snackBar: MatSnackBar, private service:YelpServiceService) { }
  ngOnInit(): void {
  }
  findRestaurants(){
    if(this.location.length == 0|| this.location.trim()==""){
      this._snackBar.open("Please provide a location", "OK", {
        duration: 5000
      })
    }
    else{
      this.service.getRestaurants(this.location, this.priceRange, this.cuisine, this.limit, Math.floor(this.radius) * 1000).subscribe (data => {
        console.log(data);
        this.result = data.businesses;
      })
    }
  }

}
