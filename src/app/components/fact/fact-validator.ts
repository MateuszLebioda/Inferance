import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {SignService} from '../../service/sign.service';

export class FactValidator {
  static identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const sign = control.get('sign').value;
    const value = control.get('value').value;
    if (SignService.isNumericValue(sign)) {
      if (isNaN(Number(value))) {
        control.get('value').setErrors({mustBeNumericValue: true});
        return {mustBeNumericValue: true};
      }
    }
    if (value === '') {
      control.get('value').setErrors({required: true});
      return {required: true};
    }
    control.get('value').setErrors(null);
    return null;
  };
}
