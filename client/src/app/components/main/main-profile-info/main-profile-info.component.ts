import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/_models/Profile';

@Component({
  selector: 'app-main-profile-info',
  templateUrl: './main-profile-info.component.html',
  styleUrls: ['./main-profile-info.component.scss']
})
export class MainProfileInfoComponent implements OnInit {

  @Input() profile: Profile = {
    user: { _id: '', username: '' },
    website: '', age: 0, country: '', favoriteBooks: '', interests: '', moreInformation: '', date: new Date()
  };
  constructor() { }

  ngOnInit() {
  }

}
