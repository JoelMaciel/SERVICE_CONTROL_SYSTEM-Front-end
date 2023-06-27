import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientsService } from 'src/app/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css'],
})
export class ClientesListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private service: ClientsService, private router: Router) {}

  ngOnInit(): void {
    this.service
      .listClients()
      .subscribe((response) => (this.clients = response));
  }

  newRegisterClient() {
    this.router.navigate(['/client-form']);
  }
}
