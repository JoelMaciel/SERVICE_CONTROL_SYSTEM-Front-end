import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string;
  password: string;
  loginError: boolean;
  registering: boolean;

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/home']);
  }

  prepareRegistration(event) {
    event.preventDefault();
    this.registering = true;
  }
  unsubscribe() {
    this.registering = false;
  }
}
