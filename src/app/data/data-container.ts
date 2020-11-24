import {TemplateData} from './template-data';
import {Fact} from '../model/fact';

export class DataContainer {

  static factList = TemplateData.getTemplateFacts();
  static ruleList = TemplateData.getTemplateRules();
  static newFactList = new Array<Fact>();

}
