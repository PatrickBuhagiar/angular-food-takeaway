import {PaymentDetails} from './payment.model';
import {Request} from './request.model';
import {OrderDetails} from './order.details.model';
import {OrderItem} from './order.item.model';
import {RequestType} from './request.type.enum';

export class Order extends Request {
  payment?: PaymentDetails;
  details: OrderDetails;

  constructor(details: OrderDetails, items: OrderItem[], payment?: PaymentDetails) {
    super(details, items);
    this.payment = payment;
  }

  getType() {
    return RequestType.ORDER;
  }

}
