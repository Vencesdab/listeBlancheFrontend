import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import url  from './config.json';

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
    return this.http.post<cookieSetter>(url+'login',request,{'headers':headers});
  }
}
