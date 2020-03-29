import {Details} from './details.model';
import {OrderItem} from './order.item.model';

export abstract class Request {
  details: Details;
  items?: OrderItem[];

  protected constructor(details: Details, items?: OrderItem[]) {
    this.details = details;
    this.items = items;
  }

  abstract getType(): string;
}
