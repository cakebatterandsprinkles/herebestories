import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';
import { Profile } from '../_models/Profile';

@Injectable({ providedIn: 'root' })
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  getMe() {
    return this.http.get<Profile>(`${environment.apiUrl}/profile/me`);
  }

  getUser(id: string) {
    return this.http.get<Profile>(`${environment.apiUrl}/profile/user/${id}`);
  }

  update(website: string, country: string, age: string, interests: string, favoriteBooks: string, moreInformation: string) {
    return this.http.post(`${environment.apiUrl}/profile`, {
      website, country, age, interests, favoriteBooks, moreInformation
    });

  }
}
