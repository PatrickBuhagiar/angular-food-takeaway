export abstract class Item {
  itemName: string;
  unitPrice: number;

  protected constructor(itemName: string, unitPrice: number) {
    this.itemName = itemName;
    this.unitPrice = unitPrice;
  }
}
