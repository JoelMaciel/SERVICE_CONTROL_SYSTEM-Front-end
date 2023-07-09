import { Injectable } from '@angular/core';
import { Client } from './clients/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateClient } from './clients/updateClient';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  apiURL: string = environment.apiBaseURL + '/api/clients';
  apiURLSignup = environment.apiBaseURL + '/api/auth/signup';

  constructor(private http: HttpClient, private authService: AuthService) {}

  listClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiURL);
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiURL}/${id}`);
  }

  update(client: Client): Observable<UpdateClient> {
    const { id, cpf, password, creationDate, updateDate, ...updateClientData } =
      client;
    return this.http.put<UpdateClient>(
      `${this.apiURL}/${client.id}`,
      updateClientData
    );
  }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiURLSignup, client);
  }

  delete(client: Client): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${client.id}`);
  }
}
