export class PaymentDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;

  constructor(cardNumber: string, expiryDate: string, cvv: string, nameOnCard: string) {
    this.cardNumber = cardNumber;
    this.expiryDate = expiryDate;
    this.cvv = cvv;
    this.nameOnCard = nameOnCard;
  }
}
