import {Fact} from '../model/fact';
import {Sign} from '../model/sign.enum';
import {Rule} from '../model/rule';
import {EqualSign} from '../model/equal-sign.enum';

export class TemplateData {

  static getTemplateFacts(): Array<Fact> {
    return Array.from([
      new Fact('przedmiot', Sign.EQUALS, 'nudny'),
      new Fact('zmęczenie', Sign.EQUALS, 'tak')
    ]);
  }


  static getTemplateRules(): Array<Rule> {
    return Array.from([
      new Rule(
        Array.from([
          new Fact('przedmiot', Sign.EQUALS, 'nudny')]),
        Array.from([]),
        new Fact('wykład', Sign.EQUALS, 'nudny')
      ),

      new Rule(
        Array.from([
          new Fact('wykładowca', Sign.EQUALS, 'nudny')]),
        Array.from([]),
        new Fact('wykład', Sign.EQUALS, 'nudny')
      ),

      new Rule(
        Array.from([
          new Fact('wykładowca', Sign.EQUALS, 'nudny'),
          new Fact('zmęczenie', Sign.EQUALS, 'tak')]),
        Array.from([
          EqualSign.AND]),
        new Fact('co robić', Sign.EQUALS, 'iść do domu')
      ),

      new Rule(
        Array.from([
          new Fact('wykładowca', Sign.EQUALS, 'nudny'),
          new Fact('zmęczenie', Sign.EQUALS, 'nie')]),
        Array.from([
          EqualSign.AND]),
        new Fact('co robić', Sign.EQUALS, 'iść na piwo')
      ),
    ]);
  }


}
