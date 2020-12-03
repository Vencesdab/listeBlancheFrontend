import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import config from './config.json';
import {Email} from './email.service';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  constructor(private http: HttpClient) { }

  verifyEmail(email: string, captchaToken: string, id: string) {
    const data = {email, captchaToken};
    return this.http.put(config.url + `api/verify/${id}`, data);
  }
}
