import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/_models/Profile';

@Component({
  selector: 'app-main-profile-info',
  templateUrl: './main-profile-info.component.html',
  styleUrls: ['./main-profile-info.component.scss']
})
export class MainProfileInfoComponent implements OnInit {

  constructor() { }

  profile: Profile = {
    username: 'cakebatterandsprinkles',
    website: 'www.yagmurcetintas.com',
    country: 'United States',
    age: 28,
    favoriteBooks: 'Harry Potter and Others',
    interests: 'Arisi, Clay, Javascript',
    moreInformation: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quo accusamus tempore voluptates. Vel quos architecto repudiandae consequatur, iste optio voluptates! Totam ut iure ea velit ab quidem adipisci culpa animi recusandae a provident ipsum libero molestiae excepturi est alias accusantium, nulla id eos repudiandae obcaecati. Debitis fugit atque porro.',
    date: new Date()
  };

  ngOnInit() {
  }

}
