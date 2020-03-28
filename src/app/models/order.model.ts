import {OrderDetails} from './order.details.model';
import {OrderItem} from './order.item.model';
import {Payment} from './payment.model';

export class Order {
  details: OrderDetails;
  items: OrderItem[];
  payment?: Payment;
}
