import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config  from '../config.json';

@Injectable({
  providedIn: 'root'
})
export class ListService {

constructor(private http: HttpClient) { }

postInWhiteList(email: string) {
  const address = config.url + "api/whitelist"
  return this.http.post(address, {expression: email}, {withCredentials: !config["proxy-dev"]})
}

postInBlackList(email: string) {
  const address = config.url + "api/blacklist"
  return this.http.post(address, {expression: email}, {withCredentials: !config["proxy-dev"]})
}

getFromWhiteList() {
  const address = config.url + "api/whitelist"
  return this.http.get<string[]>(address,{withCredentials: !config["proxy-dev"]})
}

getFromBlackList() {
  const address = config.url + "api/blacklist"
  return this.http.get<string[]>(address,{withCredentials: !config["proxy-dev"]})
}

}
