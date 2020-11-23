import {Injectable} from '@angular/core';
import {Rule} from '../model/rule';

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
        returnString = returnString.concat(rule.facts[index].toString() + ' ' + ' ' + rule.equalSigns[index].valueOf() + ' ');
      } else {
        returnString = returnString.concat(rule.facts[index].toString() + ' ');
      }
      index++;
    }

    if (rule.conclusion) {
      returnString = returnString.concat('THEN ' + rule.conclusion.toString());
    }

    return returnString;
  }
}
