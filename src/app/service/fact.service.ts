import {Injectable} from '@angular/core';
import {Fact} from '../model/fact';

@Injectable({
  providedIn: 'root'
})
export class FactService {

  constructor() {
  }

  static factToString(value: Fact): string {
    return value.attribute + ' ' + value.sign.valueOf() + ' ' + ' ' + value.value;
  }

}
