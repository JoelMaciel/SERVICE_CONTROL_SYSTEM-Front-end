import { Injectable } from '@angular/core';
import { Client } from './clients/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  getClient(): Client {
    let client: Client = new Client();
    client.name = 'Joel Maciel';
    client.cpf = '9999966666';
    return client;
  }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:8080/api/clients', client);
  }
}
