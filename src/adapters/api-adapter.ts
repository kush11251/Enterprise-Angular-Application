// api adapter
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiAdapter {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string): any {
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`);
  }
}