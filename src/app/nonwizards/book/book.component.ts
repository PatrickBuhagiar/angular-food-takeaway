import {Component, OnInit} from '@angular/core';
import {Booking} from '../../models/booking.model';
import {Menu} from '../../models/menu.model';
import {BookingDetails} from '../../models/booking.details.model';
import {MenuItem} from '../../models/menu.item.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  booking: Booking;
  menu: Menu;

  // start at 0
  step = 0;
  maxSteps = 2;

  ngOnInit(): void {
    this.booking = new Booking(new BookingDetails());

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
