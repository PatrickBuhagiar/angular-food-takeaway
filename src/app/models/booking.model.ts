import {Request} from './request.model';
import {BookingDetails} from './booking.details.model';
import {OrderItem} from './order.item.model';
import {RequestType} from './request.type.enum';

export class Booking extends Request {
  details: BookingDetails;

  constructor(details: BookingDetails, items?: OrderItem[]) {
    super(details, items);
  }

  getType(): string {
    return RequestType.BOOKING;
  }

}
