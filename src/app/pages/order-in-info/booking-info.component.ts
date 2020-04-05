import {Component, Input, OnInit} from '@angular/core';
import {BookingDetails} from '../../models/booking.details.model';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.scss']
})
export class BookingInfoComponent implements OnInit {

  @Input() bookingDetails: BookingDetails;

  constructor() {
  }

  ngOnInit(): void {
  }
}
