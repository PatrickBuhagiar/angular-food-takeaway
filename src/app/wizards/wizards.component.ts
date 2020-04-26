import {Component, OnInit} from '@angular/core';
import {Wizard} from '../models/wizard.model';

@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.component.html'
})
export class WizardsComponent implements OnInit {

  wizards: Wizard[];

  constructor() {
  }


  ngOnInit(): void {
    const deliveryDescription = 'This wizard covers a typical scenario for ordering delivery:';
    const deliveryDescriptionFlow = [
      'Select Order ',
      'Contact details, address ',
      'Payment details',
      'Summary',
      'Confirm'
    ];

    const collectDescription = 'This wizard covers a typical scenario for ordering takeout:';
    const collectDescriptionFlow = [
      'Select Order ',
      'Contact details ',
      'Summary',
      'Confirm'
    ];

    const bookDescription = 'This wizard covers a typical scenario for booking a table:';
    const bookDescriptionFlow = [
      'Contact details, number of people ',
      'Summary',
      'Confirm'
    ];

    const prebookDescription = 'This wizard covers a typical scenario booking a table and pre-ordering food:';
    const prebookDescriptionFlow = [
      'Contact details, number of people ',
      'Select order',
      'Summary',
      'Confirm'
    ];

    this.wizards = [
      new Wizard('Delivery', deliveryDescription, deliveryDescriptionFlow, 'delivery'),
      new Wizard('Collect', collectDescription, collectDescriptionFlow, 'collect'),
      new Wizard('Book a Table', bookDescription, bookDescriptionFlow, 'book'),
      new Wizard('Book a Table & Food', prebookDescription, prebookDescriptionFlow, 'book-food')
    ];
  }

}
