import {Details} from './details.model';

export class BookingDetails extends Details {
  date: string;
  numberOfPeople: number;

  constructor(firstName: string, lastName: string, mobileNumber: string, date: string, numberOfPeople: number) {
    super(firstName, lastName, mobileNumber);
    this.date = date;
    this.numberOfPeople = numberOfPeople;
  }
}

