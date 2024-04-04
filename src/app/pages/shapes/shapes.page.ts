import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataServiceService } from 'src/app/service/data-service.service';
import { VoiceService } from 'src/app/service/voice.service';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.page.html',
  styleUrls: ['./shapes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class ShapesPage implements OnInit {
  jsonData: any;
  constructor(
    private dataService: DataServiceService,
    private voiceService: VoiceService
  ) {}

  ngOnInit() {
    this.dataService.getShapes().subscribe((data) => {
      this.jsonData = data.shapes;
      console.log(this.jsonData);
    });
  }
  speak = async (data: string) => {
    await this.voiceService.speak(data);
  };
}
