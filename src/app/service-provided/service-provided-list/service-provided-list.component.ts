import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-provided-list',
  templateUrl: './service-provided-list.component.html',
  styleUrls: ['./service-provided-list.component.css'],
})
export class ServiceProvidedListComponent implements OnInit {
  name: string;
  month: number;
  months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor() {}

  ngOnInit(): void {}

  search() {
    console.log(this.name, this.month);
  }
}
