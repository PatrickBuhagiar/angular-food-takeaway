import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WizardsComponent} from './wizards/wizards.component';
import {DeliveryComponent} from './wizards/delivery/delivery.component';
import {CollectComponent} from './wizards/collect/collect.component';
import {BookComponent} from './wizards/book/book.component';
import {BookFoodComponent} from './wizards/book-food/book-food.component';


const routes: Routes = [
  {path: '', redirectTo: '/wizards', pathMatch: 'full'},
  {path: 'wizards', component: WizardsComponent},
  {path: 'wizards/delivery', component: DeliveryComponent},
  {path: 'wizards/collect', component: CollectComponent},
  {path: 'wizards/book', component: BookComponent},
  {path: 'wizards/book-food', component: BookFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
