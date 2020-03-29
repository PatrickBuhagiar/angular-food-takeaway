export abstract class Details {
  firstName: string;
  lastName: string;
  mobileNumber: string;

  protected constructor(firstName: string, lastName: string, mobileNumber: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mobileNumber = mobileNumber;
  }
}
