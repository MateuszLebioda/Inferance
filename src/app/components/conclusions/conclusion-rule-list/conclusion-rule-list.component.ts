import {Component, Input, OnInit} from '@angular/core';
import {Rule} from '../../../model/rule';

@Component({
  selector: 'app-conclusion-rule-list',
  templateUrl: './conclusion-rule-list.component.html',
  styleUrls: ['./conclusion-rule-list.component.scss']
})
export class ConclusionRuleListComponent implements OnInit {

  @Input() rules: Array<Rule>;
  @Input() actualIndex: number;
  @Input() disabledRules: Array<number>;

  constructor() {
  }

  ngOnInit(): void {
  }

  isNowProcessing(index: number): boolean {
    if (this.actualIndex !== undefined) {
      if (this.actualIndex === index) {
        return true;
      }
    }
    return false;
  }

  isDisabled(index: number): boolean {
    return this.disabledRules.indexOf(index) !== -1;
  }
}
