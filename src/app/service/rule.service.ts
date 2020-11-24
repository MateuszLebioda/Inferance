import {Injectable} from '@angular/core';
import {Rule} from '../model/rule';
import {FactService} from './fact.service';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  constructor() {
  }

  static ruleToString(rule: Rule): string {
    let returnString = '';

    if (rule.facts.length > 0) {
      returnString = 'IF ';
    }

    let index = 0;
    while (index < rule.facts.length) {
      if (index !== rule.equalSigns.length) {
        returnString
          = returnString.concat(FactService.factToString(rule.facts[index]) + ' ' + ' ' + rule.equalSigns[index].valueOf() + ' ');
      } else {
        returnString = returnString.concat(FactService.factToString(rule.facts[index]) + ' ');
      }
      index++;
    }

    if (rule.conclusion) {
      returnString = returnString.concat('THEN ' + FactService.factToString(rule.conclusion));
    }

    return returnString;
  }
}
