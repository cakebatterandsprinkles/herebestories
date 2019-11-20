import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/_models/Card';
import { PostService } from 'src/app/_services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-read-content',
  templateUrl: './main-read-content.component.html',
  styleUrls: ['./main-read-content.component.scss']
})
export class MainReadContentComponent implements OnInit {
  images: string[];

  constructor(
    private router: Router,
    private postService: PostService) { }

  card: Card = {
    prompt: '',
    story: '',
    username: '',
    liked: false,
    userid: '',
    id: '',
    likes: 0,
    date: new Date()
  };

  @Input()
  set id(value: string) {
    console.log('id', value);
    if (value) {
      this.postService.get(value).subscribe(post => {
        const userid = localStorage.getItem('userid');
        this.images = post.promptImages;
        this.card = {
          id: post._id,
          story: post.text, prompt: post.promptImages.length ? '' : post.promptText, username: post.user.username,
          likes: post.likeCount, date: post.date, userid: post.user._id, liked: post.likes.filter(l => l.user === userid).length > 0
        };
      });
    }
  }

  onClick() {
    if (!this.card.liked) {
      this.card.likes++;
      this.card.liked = true;
      this.postService.like(this.card.id).subscribe(count => {
        this.card.likes = count;
      });
    } else {
      this.card.likes--;
      this.card.liked = false;
      this.postService.unlike(this.card.id).subscribe(count => {
        this.card.likes = count;
      });
    }
  }

  backToDashboard($event) {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit() {
  }

}
