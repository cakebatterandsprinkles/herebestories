import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../environment';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) {
  }

  signUp(firstName: string, lastName: string, username: string, email: string, password: string) {
    return this.http.post(`${environment.apiUrl}/users`, { firstName, lastName, username, email, password })
      .pipe(map(user => {
        return user;
      }));
  }
}
