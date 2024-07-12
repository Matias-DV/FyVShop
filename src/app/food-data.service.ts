import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from './food-list/Food';

const URL = "https://669177ee26c2a69f6e8fd641.mockapi.io/foods";

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Food[]>{
    return this.http.get<Food[]>(URL);
  }
}
