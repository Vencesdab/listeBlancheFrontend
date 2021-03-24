import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import config from './../config.json';

export interface Email {
  id: number;
  email_sender: string;
  email_subject: string;
  email_size: number;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  email: Email;
  emails: Email[];
  base_url: string = `${config.url}auth/emails/`;

  constructor(private http: HttpClient) {}

  getAllEmails(): Observable<Email[]> {
    return this.http.get<Email[]>(`${this.base_url}/`, {
      withCredentials: !config['proxy-dev']
    });
  }

  putInWhiteList(email: Email) {
    const address = `${this.base_url}whitelist/${email.id}`;
    return this.http.put(address, {}, { withCredentials: !config['proxy-dev'] });
  }

  putInBlackList(email: Email) {
    const address = `${this.base_url}blacklist/${email.id}`;
    return this.http.put(address, {}, { withCredentials: !config['proxy-dev'] });
  }

  delete(email: Email) {
    const address = `${this.base_url}${email.id}`;
    return this.http.delete(address, { withCredentials: !config['proxy-dev'] });
  }

  restore(email: Email) {
    const address = `${this.base_url}restore/${email.id}`;
    return this.http.put(address, {}, { withCredentials: !config['proxy-dev'] });
  }
}
