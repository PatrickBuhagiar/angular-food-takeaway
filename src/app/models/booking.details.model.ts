import {Details} from './details.model';

export class BookingDetail implements Details {
  firstName: string;
  lastName: string;
  mobileNumber: string;

  date: string;
  numberOfPeople: number;
}

