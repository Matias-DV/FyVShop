import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Food } from '../food-list/Food';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})

export class InputIntegerComponent {

  

  constructor(){
  }
  
  @Input()
  amount!: number;

  @Input()
  max!: number;

  @Output()
  amountChange : EventEmitter<number> = new EventEmitter<number>();

  upAmount() : void{
    if (this.amount < this.max){
      this.amount++;
      this.amountChange.emit(this.amount);
    }
  }

  downAmount() : void{
    if(this.amount > 0){
      this.amount--;
      this.amountChange.emit(this.amount);
    }
  }

}
