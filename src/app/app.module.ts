import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { WizardsComponent } from './wizards/wizards.component';
import { WizardComponent } from './wizards/wizard/wizard.component';
import { GoBackComponent } from './layout/go-back/go-back.component';
import { OrderSelectionComponent } from './pages/order-selection/order-selection.component';
import { OrderOutInfoComponent } from './pages/order-out-info/order-out-info.component';
import { OrderInInfoComponent } from './pages/order-in-info/order-in-info.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { PaymentDetailsComponent } from './pages/payment-details/payment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WizardsComponent,
    WizardComponent,
    GoBackComponent,
    OrderSelectionComponent,
    OrderOutInfoComponent,
    OrderInInfoComponent,
    ConfirmComponent,
    SummaryComponent,
    PaymentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
