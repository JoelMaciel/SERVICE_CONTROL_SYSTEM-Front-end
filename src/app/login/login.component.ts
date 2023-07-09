import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ClientLogin } from './clientLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string;
  password: string;
  email: string;
  cpf: string;
  registering: boolean;
  successMessage: string;
  errors: string[];
  errorViolation: string;

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    const client: ClientLogin = {
      username: this.username,
      password: this.password,
    };

    this.authService.loginClient(client).subscribe(
      (response) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

  prepareRegistration(event) {
    event.preventDefault();
    this.registering = true;
  }
  unsubscribe() {
    this.registering = false;
  }

  loginClient() {
    const client: ClientLogin = {
      username: this.username,
      password: this.password,
    };

    this.authService.loginClient(client).subscribe(
      (response) => {
        const token = response.token;
        this.authService.setToken(token);
        this.successMessage = 'Welcome';
        this.errors = null;
        this.errorViolation = null;
      },
      (errorsResponse) => {
        this.successMessage = null;
        this.errors = errorsResponse.error.objects;
        this.errorViolation = errorsResponse.error.userMessage;
      }
    );
  }
}
