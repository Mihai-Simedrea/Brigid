import { Component, HostListener, OnInit } from '@angular/core';
import { MIN_WIDTH } from 'src/app/utils/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  doctorsImagePath: string =
    '../../../../assets/images/auth/doctors_shadow.png';

  mobileMaxWidth: number = MIN_WIDTH;
  getScreenWidth: number = 0;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }

  isOnMobile(): boolean {
    return this.getScreenWidth >= this.mobileMaxWidth;
  }
}
