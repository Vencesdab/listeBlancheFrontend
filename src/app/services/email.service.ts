import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import config from './../config.json';

export interface Email {
  id: number;
  fk_user: number;
  email_sender: string;
  email_subject: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  email: Email;
  emails: Email[];

  constructor(private http: HttpClient) {}

  getAllEmails(): Observable<Email[]> {
    return this.http.get<Email[]>(config.url + 'api/emails', {
      withCredentials: !config['proxy-dev']
    });
  }

  putInWhiteList(email: Email) {
    const address = config.url + 'api/whitelist/' + email.id;
    return this.http.put(address, {}, { withCredentials: !config['proxy-dev'] });
  }

  putInBlackList(email: Email) {
    const address = config.url + 'api/blacklist/' + email.id;
    return this.http.put(address, {}, { withCredentials: !config['proxy-dev'] });
  }

  delete(email: Email) {
    const address = config.url + 'api/emails/' + email.id;
    return this.http.delete(address, { withCredentials: !config['proxy-dev'] });
  }

  restore(email: Email) {
    const address = config.url + 'api/emails/restore/' + email.id;
    return this.http.put(address, {}, { withCredentials: !config['proxy-dev'] });
  }
}
