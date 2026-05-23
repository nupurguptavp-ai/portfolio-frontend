import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient);

  //AWS Learning
  apiUrl = 'http://localhost:3000';

  getHealth() {
    return this.http.get(`${this.apiUrl}/health`, {
      responseType: 'text'
    });
  }

  getProjects(){
    return this.http.get<any[]>(`${this.apiUrl}/projects`)
  }
}
