import {Fact} from './fact';
import {EqualSign} from './equal-sign.enum';

export class Rule {
  public facts = new Array<Fact>();
  public equalSigns = new Array<EqualSign>();
  public conclusion: Fact;

  constructor(facts?: Array<Fact>, equalSigns?: Array<EqualSign>, conclusion?: Fact) {
    if (facts) {
      facts.forEach(f => this.facts.push(f));
    }
    if (equalSigns) {
      equalSigns.forEach(es => this.equalSigns.push(es));
    }
    if (conclusion) {
      this.conclusion = conclusion;
    }
  }
}


