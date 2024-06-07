import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  apiURL = 'http://localhost:8080/api/v1';

  SignIn(data: any) {
    return this.http.post(`${this.apiURL}/signin`, data);
  }

  SignUp(data: any) {
    return this.http.post(`${this.apiURL}/signup`, data);
  }
}
