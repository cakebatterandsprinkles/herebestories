import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.scss']
})
export class LandingContentComponent implements OnInit {

  chosenBackground: any[] = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5'];

  ngOnInit() {
    const background = document.querySelector('.landing-container');
    const num = Math.floor(Math.random() * this.chosenBackground.length);
    background.classList.add (this.chosenBackground[num]);
  }
}
