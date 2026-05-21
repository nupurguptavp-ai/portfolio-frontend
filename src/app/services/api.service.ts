import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient);

  //AWS Learning
  apiUrl = 'http://15.135.162.216:3000';

  getHealth() {
    return this.http.get(`${this.apiUrl}/health`, {
      responseType: 'text'
    });
  }
}
