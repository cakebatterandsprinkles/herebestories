import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../_models/Card';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {
  chosenImage: string;
  chosenUrl: string;
  chosenLikeImg: string;
  likeCount = 0;

  @Input() card: Card;


  onClick() {
    if (this.chosenLikeImg === '/assets/images/heart-empty.png') {
      this.chosenLikeImg = '/assets/images/heart-full.png';
      this.likeCount++;
    } else if (this.chosenLikeImg === '/assets/images/heart-full.png') {
      this.chosenLikeImg = '/assets/images/heart-empty.png';
      this.likeCount--;
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
    this.chosenLikeImg = `/assets/images/heart-empty.png`;
  }
}
