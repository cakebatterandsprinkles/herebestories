import { Component, OnInit, HostListener } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-about-us-content',
  templateUrl: './about-us-content.component.html',
  styleUrls: ['./about-us-content.component.scss']
})
export class AboutUsContentComponent implements OnInit {

  chosenBackground: string;
  ngOnInit() {
    this.chosenBackground = 'bgcookie';
    this.checkWidth();
  }

  @HostListener('window:resize')
  checkWidth() {

    const background = document.querySelector('.about-us-container');

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

