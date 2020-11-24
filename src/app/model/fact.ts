import {Sign} from './sign.enum';

export class Fact {

  public attribute: string;
  public sign: Sign;
  public value: string;

  constructor(attribute?: string, sign?: Sign, value?: string) {
    this.attribute = attribute;
    this.sign = sign;
    this.value = value;
  }
}
