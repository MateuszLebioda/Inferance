import {Injectable} from '@angular/core';
import {Fact} from '../model/fact';
import {Sign} from '../model/sign.enum';

@Injectable({
  providedIn: 'root'
})
export class FactService {

  constructor() {
  }

  static factToString(value: Fact): string {
    return value.attribute + ' ' + value.sign.valueOf() + ' ' + ' ' + value.value;
  }

  static isFactFulfilled(fact: Fact, rule: Fact): boolean {
    if (fact.attribute.toLocaleLowerCase().trim() === rule.attribute.toLocaleLowerCase().trim()) {
      if (rule.sign === Sign.EQUALS) {
        return fact.value.toLocaleLowerCase().trim() === rule.value.toLocaleLowerCase().trim();
      } else {
        if (rule.sign === Sign.EQUALS_OR_MORE) {
          return Number(fact.value) >= Number(rule.value);
        } else if (rule.sign === Sign.MORE_THEN) {
          return Number(fact.value) > Number(rule.value);
        } else if (rule.sign === Sign.EQUALS_OR_LESS) {
          return Number(fact.value) <= Number(rule.value);
        } else if (rule.sign === Sign.LESS_THEN) {
          return Number(fact.value) < Number(rule.value);
        }
      }
    }
    return false;
  }

  static isFactFulfilledToFactArray(rule: Fact, factList: Array<Fact>): boolean {
    for (const f of factList) {
      if (this.isFactFulfilled(f, rule)) {
        return true;
      }
    }
    return false;
  }

}
