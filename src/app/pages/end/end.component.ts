import {Component, Input, OnInit} from '@angular/core';
import {Request} from '../../models/request.model';
import {Booking} from '../../models/booking.model';
import {RequestType} from '../../models/request.type.enum';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss']
})
export class EndComponent implements OnInit {

  @Input() request: Request;
  type: string;
  confirmedMessage: string;

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

  getTypeForTitle() {
    return this.request.getType() === RequestType.ORDER ? 'Ordered' : 'Booked';
  }

  getConfirmedMessage() {
    if (this.request.getType() === RequestType.ORDER) {
      return 'Your Order will be ready in an hour.';
    } else {
      return 'Your booking is confirmed for '
        + this.getNumberOfPeople()
        + ' on ' + this.getDate();
    }
  }

}
