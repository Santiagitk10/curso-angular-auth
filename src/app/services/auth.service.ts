import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//en el tsconfig.json puedo configurar los paths para no traerme todo con ../.. 
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/api/v1/auth/login`, {
      email,
      password
    });
  }
}
