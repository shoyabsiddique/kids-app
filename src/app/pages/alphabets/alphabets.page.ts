import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataServiceService } from 'src/app/service/data-service.service';
import { VoiceService } from 'src/app/service/voice.service';

@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.page.html',
  styleUrls: ['./alphabets.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AlphabetsPage implements OnInit {
  jsonData: any;
  constructor(
    private dataService: DataServiceService,
    private voiceService: VoiceService
  ) {}

  ngOnInit() {
    this.dataService.getAlphabets().subscribe((data) => {
      this.jsonData = data.alphabets;
      console.log(this.jsonData);
    });
  }
  speak = async (data: string) => {
    await this.voiceService.speak(data);
  };
}
