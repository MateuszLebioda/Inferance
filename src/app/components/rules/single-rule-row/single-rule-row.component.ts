import {Component, Input, OnInit} from '@angular/core';
import {Rule} from '../../../model/rule';
import {RuleService} from '../../../service/rule.service';

@Component({
  selector: 'app-single-rule-row',
  templateUrl: './single-rule-row.component.html',
  styleUrls: ['./single-rule-row.component.scss']
})
export class SingleRuleRowComponent implements OnInit {

  @Input() rule: Rule;
  @Input() isStateConclusion;
  @Input() isDisabled = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  ruleToString(): string {
    if (this.rule) {
      let ruleString = RuleService.ruleToString(this.rule);
      if (this.isStateConclusion) {
        ruleString = ruleString.concat(' THEN');
      }
      return ruleString;
    }
  }
}
