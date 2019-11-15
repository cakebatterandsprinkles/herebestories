import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {

  chosenImage: string;
  chosenUrl: string;

  ngOnInit() {
    const images: any[] = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9'];

    const num = Math.floor(Math.random() * images.length);
    this.chosenImage = images[num];
    this.chosenUrl = `/assets/images/${this.chosenImage}.png`;
  }
}
