import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientsService } from 'src/app/clients.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css'],
})
export class ClientsFormComponent implements OnInit {
  client: Client;
  success: boolean = false;
  errors: string[];
  errorCpf: string;
  id: number;

  constructor(
    private service: ClientsService,
    private router: Router,
    private activetedRoute: ActivatedRoute
  ) {
    this.client = new Client();
  }

  ngOnInit(): void {
    let params: Observable<Params> = this.activetedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getClientById(this.id).subscribe(
          (response) => (this.client = response),
          (errorResponse) => (this.client = new Client())
        );
      }
    });
  }

  listClients() {
    this.router.navigate(['/clients-list']);
  }

  onSubmit() {
    if (this.client.id) {
      this.service.update(this.client).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
        },
        (errorResponse) => {
          this.errors = ['Erro ao atualizar o cliente'];
        }
      );
    } else {
      this.service.save(this.client).subscribe(
        (response) => {
          this.success = true;
          this.errors = [];
          this.errorCpf = null;
          this.client = response;
        },
        (errorResponse) => {
          this.errors = errorResponse.error.objects;
          this.errorCpf = errorResponse.error.userMessage;
          this.success = false;
        }
      );
    }
  }
}
