import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientLogin } from './login/clientLogin';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL: string = environment.apiBaseURL + '/api/auth/login';
  private token: string;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(): boolean {
    const authToken = this.getToken();
    if (authToken) {
      const expired = this.jwtHelper.isTokenExpired(authToken);
      return !expired;
    }
    return false;
  }

  getClientAuthenticated() {
    const token = this.getToken();
    if (token) {
      const user = this.jwtHelper.decodeToken(token).sub;
      return user;
    }
    return null;
  }

  logOut() {
    this.token = null;
    this.router.navigate(['/login']);
  }

  loginClient(client: ClientLogin): Observable<any> {
    return this.http.post<any>(this.apiURL, client);
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
  }
}
