import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Sign} from '../../../model/sign.enum';
import {Fact} from '../../../model/fact';
import {SignService} from '../../../service/sign.service';
import {FactValidator} from '../fact-validator';

@Component({
  selector: 'app-single-fact',
  templateUrl: './single-fact.component.html',
  styleUrls: ['./single-fact.component.scss']
})
export class SingleFactComponent implements OnInit {

  @Output() factEmitter = new EventEmitter<Fact>();

  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;

  constructor(private formBuilder: FormBuilder) {
  }

  sign: Sign;
  factFormGroup: FormGroup;

  ngOnInit(): void {
    this.factFormGroup = this.createNewFactFormGroup();
  }

  getSignEnumValues(): Sign[] {
    return Object.values(Sign);
  }

  addFact(): any {

    this.factEmitter.emit(this.getFactFromForm());
    this.factFormGroup = this.createNewFactFormGroup();
  }

  createNewFactFormGroup(): FormGroup {
    return this.formBuilder.group({
      attribute: ['', Validators.required],
      sign: ['=', Validators.required],
      value: ['', Validators.required]
    }, {validators: FactValidator.identityRevealedValidator});
  }


  getFactFromForm(): Fact {
    const fact = new Fact();
    fact.attribute = this.factFormGroup.get('attribute').value;
    fact.sign = SignService.valueToEnum(this.factFormGroup.get('sign').value);
    fact.value = this.factFormGroup.get('value').value;
    return fact;
  }

}


