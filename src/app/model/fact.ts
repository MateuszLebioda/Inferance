import {Sign} from './sign.enum';

export class Fact {

  public attribute: string;
  public sign: Sign;
  public value: string;

  public toString(): string {
    return this.attribute + ' ' + this.sign.valueOf() + ' ' + ' ' + this.value;
  }

}
