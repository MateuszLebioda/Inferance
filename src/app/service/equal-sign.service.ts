import {Injectable} from '@angular/core';
import {EqualSign} from '../model/equal-sign.enum';

@Injectable({
  providedIn: 'root'
})
export class EqualSignService {

  constructor() { }

  static valueToEnum(value: string): EqualSign {
    if (EqualSign.AND.valueOf() === value) {
      return EqualSign.AND;
    } else if (EqualSign.OR.valueOf() === value) {
      return EqualSign.OR;
    } else if (EqualSign.XOR.valueOf() === value) {
      return EqualSign.XOR;
    }
  }
}
