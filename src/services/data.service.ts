// data service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  fetchData(): any {
    return this.http.get<IData>(`${this.apiUrl}/data`);
  }
}