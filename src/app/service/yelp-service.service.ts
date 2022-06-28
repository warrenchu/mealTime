import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YelpServiceService {

  constructor(public client: HttpClient) { }
  url: string = "http://localhost:9000/restaurants"
  getRestaurants(cityName: string, price: number, cuisine: string, limit: number): Observable<any>{
    var params = new HttpParams().append("cityName", cityName).append("price", price).append("cuisine", cuisine).append("limit", limit);
  
    return this.client.get(this.url, {params: params});

  }
}
