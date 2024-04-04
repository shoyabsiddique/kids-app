import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class GamesPage implements OnInit {
  constructor() {}
  score: number = 0;
  increaseNumber() {
    this.score = this.score + 1;
  }
  decreaseNumber() {
    this.score = this.score - 1;
  }

  ngOnInit() {}
}
