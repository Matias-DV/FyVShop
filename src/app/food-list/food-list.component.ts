import { Component, OnInit } from '@angular/core';
import {Food} from './Food';
import { FoodCartService } from '../food-cart.service';
import { FoodDataService } from '../food-data.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})

export class FoodListComponent implements OnInit{

  foods : Food []= [];

  constructor(private cart : FoodCartService , private foodDataService : FoodDataService) {
  }

  ngOnInit(): void {
    this.foodDataService.getAll().subscribe(foods => this.foods = foods);
  }

  addToCart(food : Food) : void{
    this.cart.addToCart(food);
    food.stock -= food.amount;
    food.amount = 0;
  }
}
