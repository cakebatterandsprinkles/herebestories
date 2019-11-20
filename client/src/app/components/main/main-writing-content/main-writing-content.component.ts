import { Component, OnInit } from '@angular/core';
import { Prompt } from 'src/app/_models/Prompt';
import { PostService } from 'src/app/_services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-writing-content',
  templateUrl: './main-writing-content.component.html',
  styleUrls: ['./main-writing-content.component.scss']
})
export class MainWritingContentComponent implements OnInit {
  prompt: Prompt;
  promptImages: string[];
  hasPrompt = false;
  textHtml: string;

  constructor(
    private router: Router,
    private postService: PostService) { }

  promptChangedHandler(prompt: Prompt) {
    this.prompt = prompt;
    this.hasPrompt = true;
  }

  promptImageChangedHandler(promptImages: string[]) {
    this.promptImages = promptImages;
    this.hasPrompt = true;
  }

  countDownFinished() {
    this.submit();
  }

  textSubmitted(text: string) {
    this.textHtml = text;
    this.submit();
  }

  textChanged(text: string) {
    this.textHtml = text;
  }

  submit() {
    this.postService.write(this.textHtml, this.prompt ?
      `Character: ${this.prompt.character}, Age: ${this.prompt.age}, Feature: ${this.prompt.feature}, Dilemma: ${this.prompt.dilemma}`
      : '',
      this.promptImages ? this.promptImages.join(',') : '').subscribe(
        data => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit() {
  }

}
