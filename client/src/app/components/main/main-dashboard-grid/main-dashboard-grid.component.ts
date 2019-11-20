import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/_models/Card';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-main-dashboard-grid',
  templateUrl: './main-dashboard-grid.component.html',
  styleUrls: ['./main-dashboard-grid.component.scss']
})
export class MainDashboardGridComponent implements OnInit {

  constructor(private postService: PostService) { }

  cards: Card[] = [];

  ngOnInit() {
    this.postService.list(0).subscribe(posts => {
      const userid = localStorage.getItem('userid');
      this.cards = posts.map(post => ({
        id: post._id,
        story: post.text, prompt: post.promptImages.length ? 'Image Prompt' : post.promptText, username: post.user.username,
        likes: post.likeCount, date: post.date, userid: post.user._id, liked: post.likes.filter(l => l.user === userid).length > 0
      }));
    });
  }

}
