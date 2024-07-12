import { Component } from '@angular/core';
import {Food} from './food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent {

  foods : Food []= [{
    name : 'tomato',
    type : 'vegetable',
    price : 0.20,
    stock : 5,
    image : 'insertar imagen',
    discount : false,
    amount : 0,
  },
  {
    name : 'orange',
    type : 'fruit',
    price : 0.15,
    stock : 3,
    image : 'insertar imagen',
    discount : true,
    amount : 0,
  },
  {
    name : 'banana',
    type : 'fuit',
    price : 0.10,
    stock : 0,
    image : 'insertar imagen',
    discount : false,
    amount : 0,
  }
]

  constructor() {

  }

  upAmount(food:Food) : void{
    if (food.amount < food.stock){
      food.amount++;
    }
  }

  downAmount(food:Food) : void{
    if(food.amount > 0){
      food.amount--;
    }
  }
}
