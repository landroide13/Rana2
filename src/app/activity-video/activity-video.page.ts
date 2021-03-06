import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-activity-video',
  templateUrl: './activity-video.page.html',
  styleUrls: ['./activity-video.page.scss'],
})
export class ActivityVideoPage implements OnInit {

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {
  }

  closeMod(){
    this.modalCtr.dismiss();
  }

}
