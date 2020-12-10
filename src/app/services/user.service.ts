import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config  from './../config.json';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  adresse = config.url + "register"

constructor(private http: HttpClient) { }

create(userdata) {
  const headers = { 'content-type': 'application/json'}  
  //const URI = config.url + "register"
  return this.http.post(this.adresse, userdata, {'headers':headers, withCredentials: !config["proxy-dev"]});
  }

}
