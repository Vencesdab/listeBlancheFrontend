import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from './../config.json';
import { Observable } from 'rxjs';

export interface History {
  email_sender: string;
  email_subject: string;
  reason: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  history: History[];

  constructor(private http: HttpClient) {}

  getAllHistory(): Observable<History[]> {
    return this.http.get<History[]>(`${config.url}auth/history`, {
      withCredentials: !config['proxy-dev']
    });
  }
}
