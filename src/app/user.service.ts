import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './signup/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserUpdate } from './signup/userUpdate';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL: string = environment.apiBaseURL + '/api/users';
  apiURLSignup = environment.apiBaseURL + '/api/auth/signup';

  constructor(private http: HttpClient, private authService: AuthService) {}

  save(user: User): Observable<User> {
    return this.http.post<User>(this.apiURLSignup, user);
  }

  update(user: User): Observable<UserUpdate> {
    const { id, cpf, creationDate, updateDate, ...updateUserData } = user;
    return this.http.put<UserUpdate>(
      `${this.apiURL}/${user.id}`,
      updateUserData
    );
  }
}
