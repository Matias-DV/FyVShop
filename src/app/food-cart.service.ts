import { Injectable } from '@angular/core';
import { Food } from './food-list/Food';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodCartService {

  private _cartList : Food[] = [];
  cartList : BehaviorSubject<Food[]> = new BehaviorSubject<Food[]>([]);

  constructor() { }

  addToCart(food : Food) {
    let item : Food | undefined = this._cartList.find((v1) => v1.name === food.name);
      if (!item){
        this._cartList.push({... food});
      } else {
        item.amount += food.amount;
      }
      this.cartList.next(this._cartList);
    }
}