import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '../../models/menu.model';
import {MenuItem} from '../../models/menu.item.model';
import {OrderItem} from '../../models/order.item.model';

@Component({
  selector: 'app-order-selection',
  templateUrl: './order-selection.component.html',
  styleUrls: ['./order-selection.component.scss']
})
export class OrderSelectionComponent implements OnInit {

  @Input() menu: Menu;
  @Input() orderItems: OrderItem[];

  constructor() {
  }

  ngOnInit(): void {
  }

  updateOrder(i: number, menuItem: MenuItem, event: Event) {
    const element = event.target as HTMLInputElement;
    const index = this.orderItems.map(item => item.itemName).indexOf(menuItem.itemName);
    if (index < 0) {
      if (element.valueAsNumber > 0) {
        this.orderItems.push(new OrderItem(menuItem.itemName, menuItem.unitPrice, element.valueAsNumber));
      }
    } else {
      if (element.valueAsNumber > 0) {
        this.orderItems[index].quantity = element.valueAsNumber;
      } else {
        this.orderItems.splice(index, 1);
      }
    }
  }

  getQuantity(i: number, menuItem: MenuItem) {
    const index = this.orderItems.map(item => item.itemName).indexOf(menuItem.itemName);
    if (index < 0) {
      return 0;
    } else {
      return this.orderItems[index].quantity;
    }
  }
}
