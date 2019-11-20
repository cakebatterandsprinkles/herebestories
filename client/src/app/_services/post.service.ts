import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';
import { Post } from '../_models/Post';

@Injectable({ providedIn: 'root' })
export class PostService {

  get(id: string) {
    return this.http.get<Post>(`${environment.apiUrl}/posts/get/${id}`);
  }

  constructor(private http: HttpClient) {
  }

  list(page: number) {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts/list/${page}`);
  }

  listForUser(userid: string, page: number) {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts/listuser/${userid}/${page}`);
  }

  write(text: string, promptText: string, promptImages: string) {
    return this.http.post(`${environment.apiUrl}/posts`, { text, promptText, promptImages });
  }

  like(id: string) {
    return this.http.post<number>(`${environment.apiUrl}/posts/like/${id}`, {});
  }

  unlike(id: string) {
    return this.http.post<number>(`${environment.apiUrl}/posts/unlike/${id}`, {});
  }
}
