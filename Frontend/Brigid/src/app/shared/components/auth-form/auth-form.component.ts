import { Country } from '@angular-material-extensions/select-country';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  logoPath: string = '../../../assets/images/logo.svg';

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    let emailregex: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.formGroup = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(emailregex)]],
      country: [null, [Validators.required]],
      password: [null, [Validators.required, this.checkPassword]],
      validate: '',
    });
  }

  get name() {
    return this.formGroup.get('name') as FormControl;
  }

  checkPassword(control: any) {
    let enteredPassword = control.value;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return !passwordCheck.test(enteredPassword) && enteredPassword
      ? { requirements: true }
      : null;
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required')
      ? 'Field is required'
      : this.formGroup.get('email').hasError('pattern')
      ? 'Invalid email address'
      : this.formGroup.get('email').hasError('alreadyInUse')
      ? 'This email address is already in use'
      : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required')
      ? 'Field is required (at least eight characters, one uppercase letter and one number)'
      : this.formGroup.get('password').hasError('requirements')
      ? 'Password needs to be at least eight characters, one uppercase letter and one number'
      : '';
  }

  getFirstNameError(): string {
    return this.formGroup.get('firstName').hasError('required')
      ? 'First Name is required'
      : '';
  }

  getLastNameError(): string {
    return this.formGroup.get('lastName').hasError('required')
      ? 'Last Name is required'
      : '';
  }

  onCountrySelected($event: Country): void {
    console.log($event);
  }

  uploadFile(fileInputEvent: any): void {
    console.log(fileInputEvent.target.files[0]);
  }

  onSubmit(post: any): void {
    this.post = post;
  }
}
