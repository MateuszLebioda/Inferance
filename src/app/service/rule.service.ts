import {Injectable} from '@angular/core';
import {Rule} from '../model/rule';
import {FactService} from './fact.service';
import {Fact} from '../model/fact';
import {EqualSign} from '../model/equal-sign.enum';

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


  static isRuleFulfilled(rule: Rule, factList: Array<Fact>): boolean {
    const truthTable = this.getTruthArray(rule, factList);
    const signTable = new Array<EqualSign>();
    rule.equalSigns.forEach(es => signTable.push(es));
    this.serviceAND(truthTable, signTable);
    this.serviceOR(truthTable, signTable);
    this.serviceXOR(truthTable, signTable);
    return truthTable[0];
  }

  private static serviceAND(truthTable: Array<boolean>, equalSigns: Array<EqualSign>): any {
    let index = 0;
    while (index <= equalSigns.length) {
      if (equalSigns[index] === EqualSign.AND) {
        truthTable[index + 1] = truthTable[index] && truthTable[index + 1];
        equalSigns.splice(index, 1);
        truthTable.splice(index, 1);
      }
      index++;
    }
  }

  private static serviceOR(truthTable: Array<boolean>, equalSigns: Array<EqualSign>): any {
    let index = 0;
    while (index <= equalSigns.length) {
      if (equalSigns[index] === EqualSign.OR) {
        truthTable[index + 1] = truthTable[index] || truthTable[index + 1];
        equalSigns.splice(index, 1);
        truthTable.splice(index, 1);
      }
      index++;
    }
  }

  private static serviceXOR(truthTable: Array<boolean>, equalSigns: Array<EqualSign>): any {
    let index = 0;
    while (index <= equalSigns.length) {
      if (equalSigns[index] === EqualSign.XOR) {
        truthTable[index + 1] = (truthTable[index] || truthTable[index + 1]) && (!truthTable[index] || !truthTable[index + 1]);
        equalSigns.splice(index, 1);
        truthTable.splice(index, 1);
      }
      index++;
    }
  }

  private static getTruthArray(rule: Rule, factList: Array<Fact>): Array<boolean> {
    const truthArray = new Array<boolean>();

    rule.facts.forEach(f => {
      truthArray.push(FactService.isFactFulfilledToFactArray(f, factList));
    });

    return truthArray;
  }


}
