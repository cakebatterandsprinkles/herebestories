import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  ngOnInit() {
    this.checkWidth();
  }

  @HostListener('window:resize')
  checkWidth() {

    const background = document.querySelector('.login-container');

    const window: number = document.body.clientWidth;
    console.log(window);
    if (window > 768) {
      background.classList.add('bglogin');
      background.classList.remove('bg-none');
    } else {
      background.classList.remove('bglogin');
      background.classList.add('bg-none');
    }

  }

}
