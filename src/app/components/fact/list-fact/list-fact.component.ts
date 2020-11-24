import {Component, Input, OnInit} from '@angular/core';
import {Fact} from '../../../model/fact';

@Component({
  selector: 'app-list-fact',
  templateUrl: './list-fact.component.html',
  styleUrls: ['./list-fact.component.scss']
})

export class ListFactComponent implements OnInit {

  @Input() facts: Array<Fact>;

  constructor() { }

  ngOnInit(): void {
  }

  deleteFact(index: number): any {
    this.facts.splice(index, 1);
  }

  deleteAllFacts(): any {
    while (this.facts.length > 0){
      this.deleteFact(0);
    }
  }
}
