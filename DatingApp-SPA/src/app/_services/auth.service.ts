import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Token } from '../_model/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post<Token>(`${this.baseURL}login`, model)
      .pipe(
        map(response => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
          }
        })
      );
  }

  register(model: any) {
    return this.http.post(`${this.baseURL}register`, model);
  }

}
