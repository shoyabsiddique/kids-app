import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataServiceService } from 'src/app/service/data-service.service';
import { VoiceService } from 'src/app/service/voice.service';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.page.html',
  styleUrls: ['./objects.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ObjectsPage implements OnInit {
  jsonData: any;
  constructor(
    private dataService: DataServiceService,
    private voiceService: VoiceService
  ) {}

  ngOnInit() {
    this.dataService.getObjects().subscribe((data) => {
      this.jsonData = data.objects;
      console.log(this.jsonData);
    });
  }
  speak = async (data: string) => {
    await this.voiceService.speak(data);
  };
}
