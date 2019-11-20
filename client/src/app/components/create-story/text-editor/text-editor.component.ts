import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  @Output() textSubmitted: EventEmitter<string> = new EventEmitter();
  @Output() textChanged: EventEmitter<string> = new EventEmitter();

  html: string;

  editorForm: FormGroup;

  ngOnInit() {
    this.editorForm = new FormGroup({
      editor: new FormControl(null)
    });
  }

  onSubmit() {
    this.textSubmitted.emit(this.html);
  }

  onContentChanged(event) {
    this.html = event.html;
    this.textChanged.emit(event.html);
  }
}
