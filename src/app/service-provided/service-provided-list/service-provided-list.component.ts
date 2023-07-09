import { Component, OnInit } from '@angular/core';
import { ServiceProvidedSearch } from './serviceProvidedList';
import { ServiceProvidedService } from 'src/app/service-provided.service';

@Component({
  selector: 'app-service-provided-list',
  templateUrl: './service-provided-list.component.html',
  styleUrls: ['./service-provided-list.component.css'],
})
export class ServiceProvidedListComponent implements OnInit {
  username: string;
  month: number;
  months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  listServiceProvided: ServiceProvidedSearch[];
  message: string;

  constructor(private service: ServiceProvidedService) {}

  ngOnInit(): void {}

  search() {
    this.service.search(this.username, this.month).subscribe((response) => {
      this.listServiceProvided = response;
      if (this.listServiceProvided.length <= 0) {
        this.message = 'No records found.';
      } else {
        this.message = null;
      }
    });
  }
}
