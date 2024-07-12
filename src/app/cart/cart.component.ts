import { Component } from '@angular/core';
import { FoodCartService } from '../food-cart.service';
import { Food } from '../food-list/Food';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$ : Observable<Food[]> | undefined;

  constructor(private cart : FoodCartService){
    this.cartList$ = cart.cartList.asObservable();
  }

}
