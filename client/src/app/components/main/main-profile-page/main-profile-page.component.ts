import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/_models/Card';

@Component({
  selector: 'app-main-profile-page',
  templateUrl: './main-profile-page.component.html',
  styleUrls: ['./main-profile-page.component.scss']
})
export class MainProfilePageComponent implements OnInit {

  cards: Card[] = Array(12).fill({
    prompt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, quae!',
    story: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam ab temporibus corrupti quos dolorem ipsa id, beatae voluptatibus ut cupiditate explicabo alias ea laborum maiores sequi deleniti odio! Amet harum asperiores velit quaerat, consectetur aut minima ipsum distinctio molestias rem recusandae at accusamus inventore eum blanditiis ipsam, hic eligendi!',
    username: 'cakebatterandsprinkles',
    likes: 0,
    date: new Date()
  });
  constructor() { }

  ngOnInit() {
  }

}
