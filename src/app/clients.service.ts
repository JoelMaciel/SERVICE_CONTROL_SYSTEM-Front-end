import { Injectable } from '@angular/core';
import { Client } from './clients/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateClient } from './clients/updateClient';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  listClients(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:8080/api/clients');
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`http://localhost:8080/api/clients/${id}`);
  }

  update(client: Client): Observable<UpdateClient> {
    const { id, creationDate, updateDate, ...updateClientData } = client;
    return this.http.put<UpdateClient>(
      `http://localhost:8080/api/clients/${client.id}`,
      updateClientData
    );
  }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:8080/api/clients', client);
  }

  delete(client: Client): Observable<any> {
    return this.http.delete<any>(
      `http://localhost:8080/api/clients/${client.id}`
    );
  }
}
