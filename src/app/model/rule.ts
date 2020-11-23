import {Fact} from './fact';
import {EqualSign} from './equal-sign.enum';

export class Rule {
  public facts = new Array<Fact>();
  public equalSigns = new Array<EqualSign>();
  public conclusion: Fact;
}


