import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import config from './../config.json';

export interface Profil {
  full_name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  base_url: string = `${config.url}auth/user/`;

  constructor(private http: HttpClient) {}

  getInfos(): Observable<Profil> {
    return this.http.get<Profil>(this.base_url, { withCredentials: !config['proxy-dev'] });
  }

  putName(name: string) {
    const address = `${this.base_url}full_name`;
    return this.http.put(address, { full_name: name }, { withCredentials: !config['proxy-dev'] });
  }

  putEmail(email: string) {
    const address = `${this.base_url}email`;
    return this.http.put(address, { email: email }, { withCredentials: !config['proxy-dev'] });
  }

  putPassword(password: string) {
    const address = `${this.base_url}password`;
    return this.http.put(
      address,
      { password: password },
      { withCredentials: !config['proxy-dev'] }
    );
  }

  putEmailPassword(password: string) {
    const address = `${this.base_url}email_password`;
    return this.http.put(
      address,
      { email_password: password },
      { withCredentials: !config['proxy-dev'] }
    );
  }
}
