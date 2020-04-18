import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/order.model';
import {Menu} from '../../models/menu.model';
import {OrderDetails} from '../../models/order.details.model';
import {MenuItem} from '../../models/menu.item.model';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.scss']
})
export class CollectComponent implements OnInit {

  order: Order;
  menu: Menu;

  // start at 0
  step = 0;
  maxSteps = 3;

  ngOnInit(): void {
    this.order = new Order(new OrderDetails(), []);

    const items: MenuItem[] = [
      new MenuItem('Pizza Margherita', 8, 'tomato and mozzarella', ['VG']),
      new MenuItem('Chicken Nuggets', 6, '8 chicken nuggets', []),
      new MenuItem('Greek Salad', 7, 'simple boring salad', ['GF', 'V', 'VG']),
      new MenuItem('Chicken Breast and Veg', 12, 'baked', ['GF']),
      new MenuItem('Ice Cream', 3, 'Vanilla only', ['GF', 'VG'])
    ];
    this.menu = new Menu(items);
  }

}
