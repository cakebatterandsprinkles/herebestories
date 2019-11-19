import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  open = false;
  onClick() {
    this.open = !this.open;
  }
  constructor() { }

  ngOnInit() {
  }

}
