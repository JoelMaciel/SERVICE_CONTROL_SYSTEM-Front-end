import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/signup/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  userSelected: User;
  messageSuccess: string;
  messageError: string;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.listUsers().subscribe(
      (response) => (this.users = response),
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }

  prepareDeletion(user: User) {
    this.userSelected = user;
  }
  newRegisterUser() {
    this.router.navigate(['/signup']);
  }

  deleteUser() {
    this.userService.delete(this.userSelected).subscribe(
      (response) => {
        (this.messageSuccess = 'User deleted successfully'), this.ngOnInit();
      },
      (errorResponse) =>
        (this.messageError =
          'User cannot be deleted as it is linked to a service')
    );
  }
}
