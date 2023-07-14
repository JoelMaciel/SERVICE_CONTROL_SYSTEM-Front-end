import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientsService } from 'src/app/clients.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserLogin } from 'src/app/login/userLogin';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css'],
})
export class ClientesListComponent implements OnInit {
  clients: Client[] = [];
  userLogin: UserLogin;
  clientSelected: Client;
  messageSuccess: string;
  messageError: string;

  constructor(
    private service: ClientsService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.service.listClients().subscribe(
      (response) => (this.clients = response),
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }

  newRegisterClient() {
    this.router.navigate(['/clients/form']);
  }

  prepareDeletion(client: Client) {
    this.clientSelected = client;
  }

  deleteClient() {
    this.service.delete(this.clientSelected).subscribe(
      (response) => {
        (this.messageSuccess = 'Client deleted successfully'), this.ngOnInit();
      },
      (errorResponse) =>
        (this.messageError =
          'Client cannot be deleted as it is linked to a service')
    );
  }
}
