import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/_models/Card';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-main-profile-page',
  templateUrl: './main-profile-page.component.html',
  styleUrls: ['./main-profile-page.component.scss']
})
export class MainProfilePageComponent implements OnInit {

  profileUserId = '';

  @Input()
  set userid(userid: string) {
    if (userid) {
      this.profileUserId = userid;
      this.postService.listForUser(userid, 0).subscribe(posts => {
        this.cards = posts.map(post => ({
          id: post._id, liked: post.likes.filter(l => l.user === userid).length > 0,
          story: post.text, prompt: post.promptText, username: post.user.username,
          likes: post.likeCount, date: post.date, userid: post.user._id
        }));
      });
    }
  }

  cards: Card[] = [];
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

}
