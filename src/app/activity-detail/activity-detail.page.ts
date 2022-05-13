import { Component, OnInit, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivityVideoPage } from '../activity-video/activity-video.page';
import { DataService } from '../services/data.service';
import { Activity } from '../types';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {

  activity: Observable<Activity>;

  constructor(private actServ: DataService, private actRoute: ActivatedRoute, private modalCtr: ModalController) {
    const actId = actRoute.snapshot.params['activityId'];
    this.activity = this.actServ.getActivity(actId);
   }

  ngOnInit() {
  }

  async openModal(){
    const videoModal = await this.modalCtr.create({
      component: ActivityVideoPage
    })
    return await videoModal.present();
  }

}
