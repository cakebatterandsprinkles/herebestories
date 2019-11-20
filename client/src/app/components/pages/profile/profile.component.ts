import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProfileService } from 'src/app/_services/profile.service';
import { Profile } from 'src/app/_models/Profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileUserId: string;
  set userid(userid: string) {
    this.profileUserId = userid;

    if (this.userid) {
      this.profileService.getUser(this.userid).subscribe(profile => {
        this.profile = profile;
        this.profileUserId = profile.user._id;
      });
    } else {
      this.profileService.getMe().subscribe(profile => {
        this.profile = profile;
        this.profileUserId = profile.user._id;
      });

    }
  }

  get userid() {
    return this.profileUserId;
  }

  profile: Profile;

  constructor(
    private route: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit() {
    this.route.paramMap.subscribe({
      next: (params: ParamMap) => this.userid = params.get('id')
    });
  }

}
