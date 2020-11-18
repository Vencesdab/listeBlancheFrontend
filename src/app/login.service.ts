import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface cookieSetter {
  setCookie: boolean
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  response;
  constructor(private http: HttpClient) { }

  login(userdata) {
    const request = '{"email": "'+ userdata.email+'","password": "'+userdata.password+'"}';
    const headers = { 'content-type': 'application/json'}  
    return this.http.post<cookieSetter>('http://543179125d8c.ngrok.io/login',request,{'headers':headers, withCredentials: true});
  }
}
