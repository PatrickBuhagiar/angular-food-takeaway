import {Component, OnInit} from '@angular/core';
import {Menu} from '../../models/menu.model';
import {MenuItem} from '../../models/menu.item.model';

@Component({
  selector: 'app-order-selection',
  templateUrl: './order-selection.component.html',
  styleUrls: ['./order-selection.component.scss']
})
export class OrderSelectionComponent implements OnInit {

  menu: Menu;

  constructor() {
  }

  ngOnInit(): void {

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
