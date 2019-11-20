import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';
import { Prompt } from '../_models/Prompt';

@Injectable({ providedIn: 'root' })
export class PromptService {

  constructor(private http: HttpClient) {
  }

  getText() {
    return this.http.get<Prompt>(`${environment.apiUrl}/prompts/text`);
  }

  getImages() {
    return this.http.get<string[]>(`${environment.apiUrl}/prompts/images`);
  }
}
