import {Component, OnInit} from '@angular/core';
import {Wizard} from '../models/wizard.model';

@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.component.html',
  styleUrls: ['./wizards.component.scss']
})
export class WizardsComponent implements OnInit {

  wizards: Wizard[];

  constructor() {
  }

  ngOnInit(): void {
    this.wizards = [
      new Wizard('Example 1', 'This is the first example', 'example1'),
      new Wizard('Example 2', 'This is the second example', 'example2'),
      new Wizard('Example 3', 'This is the third example', 'example3'),
      new Wizard('Example 4', 'This is the fourth example', 'example4'),
      new Wizard('Example 5', 'This is the fifth example', 'example5')
    ];
  }

}
