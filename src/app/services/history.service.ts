import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import config from './../config.json';



export interface HistEmail {
  id: number;
  fk_user: number;
  email_sender: string;
  email_subject: string;
  reason: string;
}
@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  email: HistEmail;
  emails: HistEmail[];

  constructor(private http: HttpClient) {}

  getHistoryEmails(): Observable<HistEmail[]> {
    return this.http.get<HistEmail[]>(config.url + 'api/emails', {
      withCredentials: !config['proxy-dev']
    });
  }
}