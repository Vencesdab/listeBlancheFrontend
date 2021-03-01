import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../config.json';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  base_url: string = `${config.url}auth/list/`;

  constructor(private http: HttpClient) {}

  postInWhiteList(email: string) {
    const address = `${this.base_url}whitelist`;
    return this.http.post(
      address,
      { expression: email },
      { withCredentials: !config['proxy-dev'] }
    );
  }

  postInBlackList(email: string) {
    const address = `${this.base_url}blacklist`;
    return this.http.post(
      address,
      { expression: email },
      { withCredentials: !config['proxy-dev'] }
    );
  }

  getFromWhiteList() {
    const address = `${this.base_url}whitelist`;
    return this.http.get<string[]>(address, { withCredentials: !config['proxy-dev'] });
  }

  getFromBlackList() {
    const address = `${this.base_url}blacklist`;
    return this.http.get<string[]>(address, { withCredentials: !config['proxy-dev'] });
  }

  deleteWhite(email:String){
    const address = '${this.base_url}delete';
    //const body = "{'expression':" + expression +'}'
    return this.http.post(address, { expression: email }, { withCredentials: !config['proxy-dev'] });
  }

  deleteBlack(email:String){
    const address = `${this.base_url}delete`;
    //const body = "{'expression':" + expression +'}'
    return this.http.post(address, { expression: email }, { withCredentials: !config['proxy-dev'] });
  }
}
