import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from './../config.json';
import { Storable, StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  adresse = config.url + 'register';

  constructor(private http: HttpClient, private storageService: StorageService) {}

  create(userdata) {
    const headers = { 'content-type': 'application/json' };
    this.storageService.store(Storable.haveAccount, true);
    return this.http.post(this.adresse, userdata, {
      headers: headers,
      withCredentials: !config['proxy-dev']
    });
  }
}
