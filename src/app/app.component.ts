// app component
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  template: '<button (click)="fetchData()">Fetch Data</button>'
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  fetchData() {
    this.dataService.fetchData().subscribe(data => console.log(data));
  }
}