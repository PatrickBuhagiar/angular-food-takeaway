import {Component, OnInit} from '@angular/core';
import {MenuItem} from '../../models/menu.item.model';
import {Menu} from '../../models/menu.model';
import {Booking} from '../../models/booking.model';
import {BookingDetails} from '../../models/booking.details.model';

@Component({
  selector: 'app-book-food',
  templateUrl: './book-food.component.html',
  styleUrls: ['./book-food.component.scss']
})
export class BookFoodComponent implements OnInit {

  booking: Booking;
  menu: Menu;

  // start at 0
  step = 0;
  maxSteps = 3;

  ngOnInit(): void {
    this.booking = new Booking(new BookingDetails(), []);
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
