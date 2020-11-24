import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EqualSign} from '../../../model/equal-sign.enum';
import {Rule} from '../../../model/rule';
import {Fact} from '../../../model/fact';
import {EqualSignService} from '../../../service/equal-sign.service';
import {RuleService} from '../../../service/rule.service';

@Component({
  selector: 'app-single-rule-builder',
  templateUrl: './single-rule-builder.component.html',
  styleUrls: ['./single-rule-builder.component.scss']
})
export class SingleRuleBuilderComponent implements OnInit {

  @Output() ruleEmitter = new EventEmitter<Rule>();
  rule: Rule;

  state: StateRuleBuilder;

  ngOnInit(): void {
    this.restart();
  }

  constructor() {
  }

  restart(): any {
    this.rule = new Rule();
    this.state = StateRuleBuilder.FACT;
  }

  getEqualSignEnumValues(): EqualSign[] {
    return Object.values(EqualSign);
  }

  addNewFact(fact: Fact): any {
    if (this.isNowFact()) {
      this.rule.facts.push(fact);
      this.changeState();
    } else if (this.isNowConclusion()) {
      this.rule.conclusion = fact;
      this.ruleEmitter.emit(this.rule);
      this.restart();
    }

  }

  addNewSign(equalSign: EqualSign): any {
    this.rule.equalSigns.push(EqualSignService.valueToEnum(equalSign));
    this.changeState();
  }

  addConclusion(): any {
    this.state = StateRuleBuilder.CONCLUSION;
  }

  isNowFact(): boolean {
    return this.state === StateRuleBuilder.FACT;
  }

  isNowSing(): boolean {
    return this.state === StateRuleBuilder.SIGN;
  }

  isNowConclusion(): boolean {
    return this.state === StateRuleBuilder.CONCLUSION;
  }

  changeState(): any {
    if (this.state === StateRuleBuilder.FACT) {
      this.state = StateRuleBuilder.SIGN;
    } else {
      this.state = StateRuleBuilder.FACT;
    }
  }

  isEmptyRule(): boolean {
    return RuleService.ruleToString(this.rule) === '';
  }

  cleanRule(): any {
    this.restart();
  }
}

export enum StateRuleBuilder {
  FACT, SIGN, CONCLUSION
}
