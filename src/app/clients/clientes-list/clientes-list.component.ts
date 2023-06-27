import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css'],
})
export class ClientesListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private service: ClientsService) {}

  ngOnInit(): void {
    this.service
      .listClients()
      .subscribe((response) => (this.clients = response));
  }
}
