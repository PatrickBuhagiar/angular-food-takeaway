import {Item} from './item.model';

export class OrderItem extends Item {
  quantity: number;

  constructor(itemName: string, unitPrice: number, quantity: number) {
    super(itemName, unitPrice);
    this.quantity = quantity;
  }
}
