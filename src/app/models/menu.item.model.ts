import {OrderItem} from './order.item.model';

export class MenuItem extends OrderItem {
  description: string;
  dietaryRequirements: string[];
}

