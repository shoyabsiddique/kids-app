import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LeaderboardPage implements OnInit {
  players: { name: string; score: number }[] = [
    { name: '1.Tom', score: 10 },
    { name: '2.Anna', score: 5 },
    { name: '3.Tae', score: 7 },
    { name: '4.Taylor', score: 5 },
    { name: '5.Joe', score: 4 },
    { name: '6.Suzy', score: 4 },
  ];

  constructor() {}

  ngOnInit() {}
}
