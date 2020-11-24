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
  @Input() blocked = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  startConclude(): any {
    this.conclude.emit();
  }

}
