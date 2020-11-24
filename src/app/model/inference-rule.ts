import {Rule} from './rule';

export class InferenceRule extends Rule{

  provenFacts = new Array<boolean>();

  constructor(rule: Rule) {
    super(rule.facts, rule.equalSigns, rule.conclusion);
  }
}
