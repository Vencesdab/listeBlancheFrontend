import { HttpClient } from '@angular/common/http';
import { Injectable, Input, OnInit } from '@angular/core';
import url  from './../config.json';

export interface cookieSetter {
  setCookie: boolean
}

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{
  adresse = url + 'login';
  isauth:boolean;
  response;

  constructor(private http: HttpClient) {
      this.isauth = false
     }

  ngOnInit() : void {
    //this.isauth = false
  }

  

  login(userdata) {
    const request = '{"email": "'+ userdata.email+'","password": "'+userdata.password+'"}';
    const headers = { 'content-type': 'application/json'}  
    //return this.http.post<cookieSetter>(url + 'login', request, {'headers':headers});
    return this.http.post<cookieSetter>('http://localhost:8070/login', request, {'headers':headers});
  }
}
