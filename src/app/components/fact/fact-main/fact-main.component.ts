import {Component, Input, OnInit} from '@angular/core';
import {Fact} from '../../../model/fact';
import {Sign} from '../../../model/sign.enum';
import {DataContainer} from '../../../data/data-container';

@Component({
  selector: 'app-fact-main',
  templateUrl: './fact-main.component.html',
  styleUrls: ['./fact-main.component.scss']
})
export class FactMainComponent implements OnInit {

  constructor() {
  }

  facts: Array<Fact>;

  ngOnInit(): void {
    this.facts = DataContainer.factList;
  }

  addFact(fact: Fact): any {
    this.facts.push(fact);
  }

  getFacts(): Array<Fact> {
    return this.facts;
  }
}
