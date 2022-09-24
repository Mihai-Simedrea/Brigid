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
      ? 'Field is required (at least eight characters, at least one uppercase letter, one lowercase letter, one number and at least one special character)'
      : formGroup.get('password').hasError('requirements')
      ? 'Password needs to be at least eight characters, at least one uppercase letter, one lowercase letter, one number and at least one special character'
      : '';
  }

  getErrorConfirmPassword(formGroup: FormGroup) {
    return formGroup.get('confirmPassword').hasError('required')
      ? 'Field is required (your password must match)'
      : formGroup.get('confirmPassword').hasError('match')
      ? 'Your password must match'
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
