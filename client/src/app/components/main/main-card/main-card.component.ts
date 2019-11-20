import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../_models/Card';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {
  chosenImage: string;
  chosenUrl: string;

  constructor(private postService: PostService) {

  }

  @Input() card: Card;


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

  ngOnInit() {

    const images: any[] = [
      'card11',
      'card12',
      'card13',
      'card14',
      'card15',
      'card16',
      'card17'
    ];

    const num = Math.floor(Math.random() * images.length);
    this.chosenImage = images[num];
    this.chosenUrl = `/assets/images/${this.chosenImage}.png`;
  }
}
