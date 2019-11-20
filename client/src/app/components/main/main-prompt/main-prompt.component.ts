import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PromptService } from 'src/app/_services/prompt.service';
import { Prompt } from 'src/app/_models/Prompt';

@Component({
  selector: 'app-main-prompt',
  templateUrl: './main-prompt.component.html',
  styleUrls: ['./main-prompt.component.scss']
})
export class MainPromptComponent implements OnInit {

  imageUrls: string[] = [];
  prompt: Prompt;
  hasPrompt = false;

  @Output() promptChanged: EventEmitter<Prompt> = new EventEmitter();
  @Output() promptImageChanged: EventEmitter<string[]> = new EventEmitter();

  constructor(private promptService: PromptService) { }

  ngOnInit() {
  }

  imagePrompt() {
    this.promptService.getImages().subscribe(images => {
      this.imageUrls = images;
      this.promptImageChanged.emit(images);
      this.hasPrompt = true;
    });
  }

  textPrompt() {
    this.promptService.getText().subscribe(prompt => {
      this.prompt = prompt;
      this.promptChanged.emit(prompt);
      this.hasPrompt = true;
    });
  }

}
