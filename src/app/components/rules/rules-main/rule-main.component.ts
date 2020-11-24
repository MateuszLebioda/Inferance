import {Component, OnInit} from '@angular/core';
import {DataContainer} from '../../../data/data-container';
import {Rule} from '../../../model/rule';

@Component({
  selector: 'app-rules-main',
  templateUrl: './rule-main.component.html',
  styleUrls: ['./rule-main.component.scss']
})
export class RuleMainComponent implements OnInit {

  constructor() {
  }

  rules: Array<Rule>;

  ngOnInit(): void {
    this.rules = DataContainer.ruleList;
  }

  addNewRule(rule: Rule): any {
    this.rules.push(rule);
  }

  getRules(): Array<Rule>{
    return this.rules;
  }
}
