import {Component, Input, OnInit} from '@angular/core';
import {Request} from '../../models/request.model';
import {Booking} from '../../models/booking.model';
import {Order} from '../../models/order.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

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
    return (this.request as Order).details.address;
  }

  getPaymentDetails() {
    return (this.request as Order).payment;
  }

}
