import {Details} from './details.model';

export class BookingDetails extends Details {
  date: string;
  numberOfPeople: number;

  constructor() {
    super();
  }
}

