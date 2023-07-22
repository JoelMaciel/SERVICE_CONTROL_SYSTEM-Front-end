import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/signup/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
})
export class UsersFormComponent implements OnInit {
  user: User;
  success: boolean = false;
  errors: string[];
  errorCpf: string;
  id: number;

  constructor(
    private userService: UserService,
    private router: Router,
    private activetedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let params: Observable<Params> = this.activetedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams['id'];
      if (this.id) {
        this.userService.getUserById(this.id).subscribe(
          (response) => (this.user = response),
          (errorResponse) => (this.user = new User())
        );
      }
    });
  }

  listUsers() {
    this.router.navigate(['/users/list']);
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
    }
  }
}
