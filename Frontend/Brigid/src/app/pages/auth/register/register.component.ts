import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  /* Images */
  doctorsImagePath: string =
    '../../../../assets/images/auth/doctors_shadow.png';

  constructor() {}

  ngOnInit(): void {}
}
