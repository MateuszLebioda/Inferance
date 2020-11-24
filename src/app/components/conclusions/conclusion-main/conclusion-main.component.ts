import {Component, OnInit} from '@angular/core';
import {DataContainer} from '../../../data/data-container';
import {Fact} from '../../../model/fact';
import {RuleService} from '../../../service/rule.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BlockUI, NgBlockUI} from 'ng-block-ui';

@Component({
  selector: 'app-conclusion-main',
  templateUrl: './conclusion-main.component.html',
  styleUrls: ['./conclusion-main.component.scss']
})
export class ConclusionMainComponent implements OnInit {

  constructor(private snackBar: MatSnackBar) {
  }

  @BlockUI() block: NgBlockUI;

  facts = DataContainer.factList;
  newFacts = DataContainer.newFactList;
  rules = DataContainer.ruleList;
  activatedRules = new Array<number>();
  actualProcessing = -1;
  isBlockedProcess = false;

  ngOnInit(): void {
  }

  async startConclude(): Promise<any> {
    this.block.start('Wnioskuję');
    this.isBlockedProcess = true;
    this.activatedRules = new Array<number>();
    while (this.actualProcessing < this.rules.length - 1) {
      if (this.actualProcessing === -1) {
        this.nextIterationSnack();
      }
      this.actualProcessing++;
      if (this.activatedRules.indexOf(this.actualProcessing) === -1) {
        if (RuleService.isRuleFulfilled(this.rules[this.actualProcessing], this.getAllFactsBase())) {
          await delay(2000);
          this.newFacts.push(this.rules[this.actualProcessing].conclusion);
          this.addedFactSnack();
          this.activatedRules.push(this.actualProcessing);
          this.actualProcessing = -1;
        }
        await delay(1000);
      }
    }
    this.endInference();
    this.isBlockedProcess = false;
    this.actualProcessing = -1;
    this.block.stop();
  }

  getAllFactsBase(): Array<Fact> {
    const factsArray = new Array<Fact>();

    this.facts.forEach(f => factsArray.push(f));
    this.newFacts.forEach(f => factsArray.push(f));

    return factsArray;
  }

  endInference(): any {
    this.snackBar.open('Zakończono wnioskowanie', 'Wnioskowanie', {
      duration: 2000,
      horizontalPosition: 'center'
    });
  }

  nextIterationSnack(): any {
    this.snackBar.open('Rozpoczeto kolejną iterację', 'Iteracja', {
      duration: 2000,
      horizontalPosition: 'end'
    });
  }

  addedFactSnack(): any {
    this.snackBar.open('Dodano nowy faktę', 'Fakt', {
      duration: 2000,
      horizontalPosition: 'start'
    });
  }

}

function delay(ms: number): any {
  return new Promise(resolve => setTimeout(resolve, ms));
}

