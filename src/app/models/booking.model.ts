import {BookingDetail} from './booking.details.model';
import {OrderItem} from './order.item.model';

export class Booking {
  details: BookingDetail;
  items?: OrderItem;
}
