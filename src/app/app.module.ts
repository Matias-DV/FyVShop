import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';

import { FormsModule } from '@angular/forms';
import { FyvshopAboutComponent } from './fyvshop-about/fyvshop-about.component';
import { CartComponent } from './cart/cart.component';
import { FyvshopFoodsComponent } from './fyvshop-foods/fyvshop-foods.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FyvshopAboutComponent,
    CartComponent,
    FyvshopFoodsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
