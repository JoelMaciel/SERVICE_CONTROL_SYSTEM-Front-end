import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Client } from 'src/app/clients/client';
import { ServiceProvided } from '../serviceProvided';
import { ServiceProvidedService } from 'src/app/service-provided.service';

@Component({
  selector: 'app-service-provided-form',
  templateUrl: './service-provided-form.component.html',
  styleUrls: ['./service-provided-form.component.css'],
})
export class ServiceProvidedFormComponent implements OnInit {
  clients: Client[] = [];
  serviceProvided: ServiceProvided;

  constructor(
    private clientService: ClientsService,
    private serviceProvidedService: ServiceProvidedService
  ) {
    this.serviceProvided = new ServiceProvided();
  }

  ngOnInit(): void {
    this.clientService
      .listClients()
      .subscribe((response) => (this.clients = response));
  }

  onSubmit() {
    this.serviceProvidedService
      .save(this.serviceProvided)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
