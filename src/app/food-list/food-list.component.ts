import { Component } from '@angular/core';
import {food} from './food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent {

  foods : food []= [{
    name : 'tomato',
    type : 'vegetable',
    price : 0.20,
    stock : 5,
    image : 'insertar imagen',
    discount : false,
  },
  {
    name : 'orange',
    type : 'fruit',
    price : 0.15,
    stock : 3,
    image : 'insertar imagen',
    discount : true,
  },
  {
    name : 'banana',
    type : 'fuit',
    price : 0.10,
    stock : 0,
    image : 'insertar imagen',
    discount : false,
  }
]

  constructor() {

  }
}
