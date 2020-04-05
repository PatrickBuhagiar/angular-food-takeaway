import {Component, Input, OnInit} from '@angular/core';
import {OrderDetails} from '../../models/order.details.model';

@Component({
  selector: 'app-order-out-info',
  templateUrl: './order-out-info.component.html',
  styleUrls: ['./order-out-info.component.scss']
})
export class OrderOutInfoComponent implements OnInit {

  @Input() orderDetails: OrderDetails;

  constructor() {
  }

  ngOnInit(): void {
  }
}
