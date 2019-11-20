import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-main-chronometer',
  templateUrl: './main-chronometer.component.html',
  styleUrls: ['./main-chronometer.component.scss']
})

export class MainChronometerComponent implements OnInit {
  @Output() countDownFinished: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;

  @Input()
  set hasPrompt(hasPrompt: boolean) {
    if (hasPrompt) {
      this.countdown.begin();
    }
  }


  constructor() { }

  ngOnInit() {
  }

  handleCountdown(event) {
    if (event.action === 'done') {
      this.countDownFinished.emit(true);
    }
  }
}
