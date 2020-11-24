import {Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {Sign} from '../../../model/sign.enum';
import {Fact} from '../../../model/fact';
import {SignService} from '../../../service/sign.service';
import {FactValidator} from '../fact-validator';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-single-fact-builder',
  templateUrl: './single-fact-builder.component.html',
  styleUrls: ['./single-fact-builder.component.scss']
})
export class SingleFactBuilderComponent implements OnInit, OnChanges {

  @Output() factEmitter = new EventEmitter<Fact>();

  @Input() disable = false;
  @Input() save = false;
  @Input() isThisFact = true;

  @ViewChild('addButton') addButton: MatButton;


  sign: Sign;
  factFormGroup: FormGroup;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent): any {
    if (event.key === 'Enter') {
      if (this.factFormGroup && this.factFormGroup.valid) {
        this.addButton._elementRef.nativeElement.click();
        this.addButton._elementRef.nativeElement.focus();
      }
    }
  }


  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
    this.factFormGroup = this.createNewFactFormGroup();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.factFormGroup) {
      this.factFormGroup = this.createFromOldFormGroup();
    }
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
      attribute: [{value: '', disabled: this.disable}, Validators.required],
      sign: [{value: '=', disabled: this.disable}, Validators.required],
      value: [{value: '', disabled: this.disable}, Validators.required]
    }, {validators: FactValidator.identityRevealedValidator});
  }

  createFromOldFormGroup(): FormGroup {
    const attribute = this.factFormGroup.get('attribute').value;
    const sing = this.factFormGroup.get('sign').value;
    const val = this.factFormGroup.get('value').value;

    return this.formBuilder.group({
      attribute: [{value: attribute, disabled: this.disable}, Validators.required],
      sign: [{value: sing, disabled: this.disable}, Validators.required],
      value: [{value: val, disabled: this.disable}, Validators.required]
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


