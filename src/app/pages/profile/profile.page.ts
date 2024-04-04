import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ProfilePage implements OnInit {
  userName: string = 'Shoyab';
  userAge: number = 22; //
  favoriteColor: string = 'Red 🔴';
  favoriteAnimalSound: string = 'Mew 🐈';
  favoriteShape: string = 'Dodecagon ⭕'; //

  achievements: string[] = [
    'Color Master 🎓',
    'Number Ninja 🎓',
    'Shape Explorer 🎓',
    'Alphabet Champion 🎓',
  ];

  totalTasks = 10;
  completedTasks = 7;
  calculateCompletionPercentage(): number {
    return (this.completedTasks / this.totalTasks) * 100;
  }
  constructor() {}

  ngOnInit() {}
}
