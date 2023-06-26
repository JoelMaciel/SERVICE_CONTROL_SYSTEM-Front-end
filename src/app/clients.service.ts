import { Injectable } from '@angular/core';
import { Client } from './clients/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor() {}

  getClient(): Client {
    let client: Client = new Client();
    client.name = 'Joel Maciel';
    client.cpf = '9999966666';
    return client;
  }
}
