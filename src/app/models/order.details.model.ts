import {Details} from './details.model';

export class OrderDetails extends Details {
  address: string;

  constructor(firstName: string, lastName: string, mobileNumber: string, address: string) {
    super(firstName, lastName, mobileNumber);
    this.address = address;
  }
}
