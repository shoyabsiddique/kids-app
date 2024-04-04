import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataServiceService } from 'src/app/service/data-service.service';
import { VoiceService } from 'src/app/service/voice.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AnimalsPage implements OnInit {
  jsonData: any;
  constructor(
    private dataService: DataServiceService,
    private voiceService: VoiceService
  ) {}

  ngOnInit() {
    this.dataService.getAnimals().subscribe((data) => {
      this.jsonData = data.animals;
      console.log(this.jsonData);
    });
  }
  speak = async (data: string) => {
    await this.voiceService.speak(data);
  };
}
