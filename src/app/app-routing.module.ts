import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FyvshopFoodsComponent } from './fyvshop-foods/fyvshop-foods.component';
import { FyvshopAboutComponent } from './fyvshop-about/fyvshop-about.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'foods',
    pathMatch : 'full'
  },
  {
    path : 'foods',
    component: FyvshopFoodsComponent
  },
  {
    path : 'about',
    component : FyvshopAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
