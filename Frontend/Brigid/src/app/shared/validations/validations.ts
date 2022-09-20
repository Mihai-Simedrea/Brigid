import { FormGroup } from '@angular/forms';

class Errors {
  getErrorEmail(formGroup: FormGroup) {
    return formGroup.get('email').hasError('required')
      ? 'Field is required'
      : formGroup.get('email').hasError('pattern')
      ? 'Invalid email address'
      : formGroup.get('email').hasError('alreadyInUse')
      ? 'This email address is already in use'
      : '';
  }

  getErrorPassword(formGroup: FormGroup) {
    return formGroup.get('password').hasError('required')
      ? 'Field is required (at least eight characters, one uppercase letter and one number)'
      : formGroup.get('password').hasError('requirements')
      ? 'Password needs to be at least eight characters, one uppercase letter and one number'
      : '';
  }

  getFirstNameError(formGroup: FormGroup): string {
    return formGroup.get('firstName').hasError('required')
      ? 'First Name is required'
      : '';
  }

  getLastNameError(formGroup: FormGroup): string {
    return formGroup.get('lastName').hasError('required')
      ? 'Last Name is required'
      : '';
  }

  getUsernameError(formGroup: FormGroup): string {
    return formGroup.get('username').hasError('required')
      ? 'Username is required'
      : '';
  }
}

export const ValidationErrors = new Errors();
