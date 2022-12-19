import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }
  routeToFoodPicker(){
    this.router.navigate(['/picker'])
  }
  routeToHome(){
    this.router.navigate(['/'])
  }
  routeToYelpFinder(){
    this.router.navigate(['/yelpFinder'])
  }
  routeToTipCalc(){
    this.router.navigate(['/tipcalc'])
  }
}
