import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import config from './../config.json';

export interface Profil {
  full_name: string;
  //mdp : string
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  constructor(private http: HttpClient) {}

  getInfos(): Observable<Profil> {
    return this.http.get<Profil>(config.url + 'api/user', {
      withCredentials: !config['proxy-dev']
    });
  }

  putName(name: string) {
    const address = config.url + 'api/user/full_name';
    return this.http.put(address, { full_name: name }, { withCredentials: !config['proxy-dev'] });
  }

  putEmail(email: string) {
    const address = config.url + 'api/user/email';
    return this.http.put(address, { email: email }, { withCredentials: !config['proxy-dev'] });
  }

  putPassword(password: string) {
    const address = config.url + 'api/user/password';
    return this.http.put(
      address,
      { password: password },
      { withCredentials: !config['proxy-dev'] }
    );
  }

  putEmailPassword(password: string) {
    const address = config.url + 'api/user/email_password';
    return this.http.put(
      address,
      { email_password: password },
      { withCredentials: !config['proxy-dev'] }
    );
  }
}
