import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../config.json';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {
  captcha:boolean = false

  constructor(private http: HttpClient) { }

  verifyEmail(email: string, captchaToken: string, id: string) {
    const data = { email, captchaToken };
    return this.http.put(`${config.url}verify/${id}`, data);
  }

  getCaptcha(){
    return this.captcha
  }

  setCaptcha(){
    this.captcha = true
  }
}
