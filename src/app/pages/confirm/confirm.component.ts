import {Component, Input, OnInit} from '@angular/core';
import {Request} from '../../models/request.model';
import {Booking} from '../../models/booking.model';
import {Order} from '../../models/order.model';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Input() request: Request;

  constructor() {
  }

  ngOnInit(): void {
  }

  getDate() {
    return (this.request as Booking).details.date;
  }

  getNumberOfPeople() {
    return (this.request as Booking).details.numberOfPeople;
  }

  getAddress() {
    return (this.request as Order).details.address || null;
  }

  getPaymentDetails() {
    return (this.request as Order).payment;
  }
}
