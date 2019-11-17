import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-settings',
  templateUrl: './main-settings.component.html',
  styleUrls: ['./main-settings.component.scss']
})
export class MainSettingsComponent implements OnInit {

  ngOnInit() {
    this.checkWidth();
  }

  @HostListener('window:resize')
  checkWidth() {

    const bg = document.querySelector('.settings-container');

    const window: number = document.body.clientWidth;
    if (window > 1280) {
      bg.classList.add('bgsettings');
      bg.classList.remove('bg-none');
    } else {
      bg.classList.remove('bgsettings');
      bg.classList.add('bg-none');
    }

  }

}
