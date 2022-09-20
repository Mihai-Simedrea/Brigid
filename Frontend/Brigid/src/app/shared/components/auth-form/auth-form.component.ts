import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticateClient, RegisterModel } from 'src/app/autogenerated/api';
import { ValidationErrors } from '../../validations/validations';
import { Patterns } from '../../validations/regex';
import { RouteList } from 'src/app/utils/routes';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit, OnDestroy {
  logoPath: string = '../../../assets/images/logo.svg';
  subTitle: string = 'Begin your Journey';
  titleAlert: string = 'This field is required';
  successMessage: string = 'Your account was created successfully!';
  failMessage: string = 'The registration failed!';
  emailHintMessage: string =
    'An encrypted and autogenerated algorithm for decrypting your password will be sent here!';

  formGroup: FormGroup;
  validationErrors = ValidationErrors;
  post: any = '';

  authSubscription: Subscription;

  constructor(
    private _formBuilder: FormBuilder,
    private readonly _auth: AuthenticateClient,
    private readonly _router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this._formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      username: [null, [Validators.required]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern(Patterns.email),
          Validators.email,
        ],
      ],
      country: [null, [Validators.required]],
      password: [null, [Validators.required, this.checkPassword]],
    });
  }

  checkPassword(control: any) {
    const enteredPassword = control.value;
    return !Patterns.password.test(enteredPassword) && enteredPassword
      ? { requirements: true }
      : null;
  }

  onSubmit(post: any): void {
    this.post = post;

    // this won't be needed anymore
    const formData = {
      username: this.post.username,
      email: this.post.email,
      password: this.post.password,
    } as RegisterModel;

    // this will be the new data that will be sent to BE
    const data = { ...this.post, country: this.post.country.alpha3Code };

    // if (formData !== null) {
    //   this.authSubscription = this._auth.registerDoctor(formData).subscribe({
    //     next: () => {
    //       this._router.navigate([RouteList.login]);
    //       this.snackBar.open(this.successMessage);
    //     },
    //     error: () => {
    //       this.snackBar.open(this.failMessage);
    //     },
    //   });
    // }
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
