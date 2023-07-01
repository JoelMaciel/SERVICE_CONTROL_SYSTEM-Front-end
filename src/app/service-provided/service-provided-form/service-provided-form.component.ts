import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Client } from 'src/app/clients/client';
import { ServiceProvided } from '../serviceProvided';

@Component({
  selector: 'app-service-provided-form',
  templateUrl: './service-provided-form.component.html',
  styleUrls: ['./service-provided-form.component.css'],
})
export class ServiceProvidedFormComponent implements OnInit {
  clients: Client[] = [];
  serviceProvided: ServiceProvided;

  constructor(private clientService: ClientsService) {
    this.serviceProvided = new ServiceProvided();
  }

  ngOnInit(): void {
    this.clientService
      .listClients()
      .subscribe((response) => (this.clients = response));
  }

  onSubmit() {
    console.log(this.serviceProvided);
  }
}
