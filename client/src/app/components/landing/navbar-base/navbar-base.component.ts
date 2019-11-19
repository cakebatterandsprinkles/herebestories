import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-base',
  templateUrl: './navbar-base.component.html',
  styleUrls: ['./navbar-base.component.scss']
})
export class NavbarBaseComponent implements OnInit {
  open = false;
  onClick() {
    this.open = !this.open;
  }
  constructor() { }

  ngOnInit() {
  }

}
