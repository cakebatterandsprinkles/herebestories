import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';


@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService) { }
  open = false;
  onClick() {
    this.open = !this.open;
  }

  handleLogout() {
    this.authenticationService.logout();
    location.reload();
  }

  ngOnInit() {
  }

}
