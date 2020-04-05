import {Component, Input, OnInit} from '@angular/core';
import {PaymentDetails} from '../../models/payment.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  @Input() paymentDetails: PaymentDetails;

  constructor() {
  }

  ngOnInit(): void {
  }

}
