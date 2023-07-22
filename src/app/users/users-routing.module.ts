import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';
import { UsersFormComponent } from './users-form/users-form.component';
import { UserListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: 'users',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'form', component: UsersFormComponent },
      { path: 'list', component: UserListComponent },
      { path: 'form/:id', component: UsersFormComponent },
      { path: '', redirectTo: '/users/list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
