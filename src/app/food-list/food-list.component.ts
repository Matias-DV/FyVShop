import { Component } from '@angular/core';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.scss'
})
export class FoodListComponent {

  food = {
    "name" : "tomato",
    "type" : "vegetable",
    "price" : 70,
    "stock" : 25,
    "image" : "insertar imagen"
  }

}
