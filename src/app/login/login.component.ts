import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserLogin } from './userLogin';

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
    const user: UserLogin = {
      username: this.username,
      password: this.password,
    };

    this.authService.loginUser(user).subscribe(
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
    const user: UserLogin = {
      username: this.username,
      password: this.password,
    };

    this.authService.loginUser(user).subscribe(
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
