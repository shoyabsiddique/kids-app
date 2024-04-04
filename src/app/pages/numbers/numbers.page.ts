import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VoiceService } from 'src/app/service/voice.service';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.page.html',
  styleUrls: ['./numbers.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class NumbersPage implements OnInit {
  jsonData: any;
  constructor(
    private dataService: DataServiceService,
    private voiceService: VoiceService
  ) {}

  ngOnInit() {
    this.dataService.getNumbers().subscribe((data) => {
      this.jsonData = data.numbers;
      console.log(this.jsonData);
    });
  }
  speak = async (data: string) => {
    await this.voiceService.speak(data);
  };
}
