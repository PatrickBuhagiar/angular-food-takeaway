import {Details} from './details.model';

export class OrderDetails extends Details {
  address?: string;

  constructor() {
    super();
  }
}
