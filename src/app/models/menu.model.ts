import {MenuItem} from './menu.item.model';

export class Menu {
  items: MenuItem[];

  constructor(items: MenuItem[]) {
    this.items = items;
  }
}
