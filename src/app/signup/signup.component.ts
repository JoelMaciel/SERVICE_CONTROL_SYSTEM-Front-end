import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: User;
  id: number;
  success: boolean = false;
  errorCpf: string;
  registering: boolean;
  successMessage: string;
  errors: string[];
  errorViolation: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private activetedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit() {
    if (this.user.id) {
      this.userService.update(this.user).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
        },
        (errorResponse) => {
          this.errors = ['Erro ao atualizar o cliente'];
        }
      );
    } else {
      this.userService.save(this.user).subscribe(
        (response) => {
          this.success = true;
          this.errors = [];
          this.errorCpf = null;
          this.user = response;
          console.log(this.user);
        },
        (errorResponse) => {
          this.errors = errorResponse.error.objects;
          this.errorCpf = errorResponse.error.userMessage;
          this.success = false;
        }
      );
    }

    console.log(this.user);
  }

  unsubscribe() {
    this.router.navigate(['/login']);
  }
}
