import { Component, OnInit, HostListener } from '@angular/core';
import { ProfileService } from 'src/app/_services/profile.service';
import { Profile } from 'src/app/_models/Profile';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-settings',
  templateUrl: './main-settings.component.html',
  styleUrls: ['./main-settings.component.scss']
})


export class MainSettingsComponent implements OnInit {

  profile: Profile;
  settingsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService) {
  }

  ngOnInit() {
    this.checkWidth();

    this.settingsForm = this.formBuilder.group({
      country: '',
      age: '',
      interests: '',
      favoriteBooks: '',
      website: '',
      moreInformation: ''

    });

    this.profileService.getMe().subscribe(profile => {
      this.profile = profile;
      this.settingsForm.patchValue(profile);
    });
  }

  onSubmit() {
    const controls = this.settingsForm.controls;
    this.profileService.update(controls.website.value, controls.country.value, controls.age.value, controls.interests.value,
      controls.favoriteBooks.value, controls.moreInformation.value).subscribe(data => {
        location.reload();
      });
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
