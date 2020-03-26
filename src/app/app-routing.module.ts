import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WizardsComponent} from './wizards/wizards.component';
import {WizardComponent} from './wizards/wizard/wizard.component';


const routes: Routes = [
  {path: '', redirectTo: '/wizards', pathMatch: 'full'},
  {path: 'wizards', component: WizardsComponent},
  {path: 'wizards/:wizard', component: WizardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
