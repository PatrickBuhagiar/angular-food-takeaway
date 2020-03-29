import {Item} from './item.model';

export class MenuItem extends Item {
  description: string;
  dietaryRequirements: string[];

  constructor(itemName: string, price: number, description: string, dietaryRequirements: string[]) {
    super(itemName, price);
    this.description = description;
    this.dietaryRequirements = dietaryRequirements;
  }
}

