import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  response;
  constructor(private http: HttpClient) { }

  login(userdata): void {
    const request = '{"email": "'+ userdata.email+'","password": "'+userdata.password+'"}';
    const headers = { 'content-type': 'application/json'}  
    this.http.post<any>('http://localhost:8000/login',request,{'headers':headers})
  }
}
