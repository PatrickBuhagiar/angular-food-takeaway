import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WizardsComponent} from './wizards/wizards.component';
import {WizardComponent} from './wizards/wizard/wizard.component';
import {DeliveryComponent} from './nonwizards/delivery/delivery.component';
import {CollectComponent} from './nonwizards/collect/collect.component';
import {BookComponent} from './nonwizards/book/book.component';
import {BookFoodComponent} from './nonwizards/book-food/book-food.component';


const routes: Routes = [
  {path: '', redirectTo: '/wizards', pathMatch: 'full'},
  {path: 'wizards', component: WizardsComponent},
  {path: 'wizards/:wizard', component: WizardComponent},
  {path: 'wizards/delivery/wizardless', component: DeliveryComponent},
  {path: 'wizards/collect/wizardless', component: CollectComponent},
  {path: 'wizards/book/wizardless', component: BookComponent},
  {path: 'wizards/book-food/wizardless', component: BookFoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
