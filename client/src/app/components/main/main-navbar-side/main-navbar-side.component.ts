import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-main-navbar-side',
  templateUrl: './main-navbar-side.component.html',
  styleUrls: ['./main-navbar-side.component.scss']
})
export class MainNavbarSideComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  handleLogout() {
    this.authenticationService.logout();
    location.reload();
  }

  ngOnInit() {
  }

}
