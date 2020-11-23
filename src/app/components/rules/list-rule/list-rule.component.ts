import {Component, Input, OnInit} from '@angular/core';
import {Rule} from '../../../model/rule';

@Component({
  selector: 'app-list-rule',
  templateUrl: './list-rule.component.html',
  styleUrls: ['./list-rule.component.scss']
})
export class ListRuleComponent implements OnInit {

  @Input() rules: Array<Rule>;

  constructor() { }

  ngOnInit(): void {
  }

  deleteAllRules(): any {
    while (this.rules.length > 0){
      this.deleteRule(0);
    }
  }

  deleteRule(index: number): any {
    this.rules.splice(index, 1);
  }
}
