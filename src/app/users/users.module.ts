import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { UserListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersFormComponent } from './users-form/users-form.component';
import { RouterModule } from '@angular/router';
import { SignupModule } from '../signup/signup.module';

@NgModule({
  declarations: [UsersFormComponent, UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    RouterModule,
    SignupModule,
  ],
  exports: [UsersFormComponent, UserListComponent],
})
export class UsersModule {}
