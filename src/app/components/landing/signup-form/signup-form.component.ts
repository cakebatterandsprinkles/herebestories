import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  ngOnInit() {
    this.checkWidth();
  }

  @HostListener('window:resize')
  checkWidth() {

    const background = document.querySelector('.login-container');

    const window: number = document.body.clientWidth;
    console.log(window);
    if (window > 768) {
      background.classList.add('bgsignup');
      background.classList.remove('bg-none');
    } else {
      background.classList.remove('bgsignup');
      background.classList.add('bg-none');
    }

  }

}
