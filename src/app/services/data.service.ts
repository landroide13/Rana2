import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getActivity(id): Observable<Activity>{
    return this.http.get<Activity>(API + "/id/" + id);
  }

  getActivities(): Observable<Activity[]>{
    return this.http.get<Activity[]>(API);
  }


}

const API = 'https://orangevalleycaa.org/api/videos';
