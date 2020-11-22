import {Injectable} from '@angular/core';
import {Sign} from '../model/sign.enum';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor() {
  }

  static valueToEnum(value: string): Sign {
    if (Sign.EQUALS.valueOf() === value) {
      return Sign.EQUALS;
    } else if (Sign.EQUALS_OR_LESS.valueOf() === value) {
      return Sign.EQUALS_OR_LESS;
    } else if (Sign.EQUALS_OR_MORE.valueOf() === value) {
      return Sign.EQUALS_OR_MORE;
    } else if (Sign.LESS_THEN.valueOf() === value) {
      return Sign.LESS_THEN;
    } else if (Sign.MORE_THEN.valueOf() === value) {
      return Sign.MORE_THEN;
    }
  }

  static isNumericValue(value: string): boolean {
    if (Sign.EQUALS.valueOf() === value) {
      return false;
    }
    return true;
  }
}
