import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Fact} from '../../../model/fact';

@Component({
  selector: 'app-conclusion-fact-list',
  templateUrl: './conclusion-fact-list.component.html',
  styleUrls: ['./conclusion-fact-list.component.scss']
})
export class ConclusionFactListComponent implements OnInit {

  @Output() conclude = new EventEmitter();

  @Input() facts: Array<Fact>;
  @Input() newFacts: Array<Fact>;
  @Input() blocked: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.deleteAllNewFacts();
  }

  startConclude(): any {
    this.deleteAllNewFacts();
    this.conclude.emit();
  }

  deleteNewFact(index: number): any {
    this.newFacts.splice(index, 1);
  }

  deleteAllNewFacts(): any {
    while (this.newFacts.length > 0){
      this.deleteNewFact(0);
    }
  }

}
