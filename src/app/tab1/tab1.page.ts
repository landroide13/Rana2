import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { Activity } from '../types';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  activityList: Observable<Activity[]>;

  constructor(private data: DataService) {}


  ngOnInit(){
    setTimeout(() => {
      this.activityList = this.data.getActivities();
    }, 3000)
  }

}
