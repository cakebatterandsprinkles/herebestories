import { Component, OnInit, HostListener } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.scss']
})
export class LandingContentComponent implements OnInit {

  chosenBackground: string;

  ngOnInit() {

    const backgrounds: any[] = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5'];

    const num = Math.floor(Math.random() * backgrounds.length);
    this.chosenBackground = backgrounds[num];

    this.checkWidth();
  }

  @HostListener('window:resize')
  checkWidth() {

    const background = document.querySelector('.landing-container');

    const window: number = document.body.clientWidth;
    console.log(window);
    if (window > 768) {
      background.classList.add(this.chosenBackground);
      background.classList.remove('bg-none');
    } else {
      background.classList.remove(this.chosenBackground);
      background.classList.add('bg-none');
    }

  }
}
