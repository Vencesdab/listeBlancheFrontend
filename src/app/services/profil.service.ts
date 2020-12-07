import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import config from './../config.json';

export interface Profil {
	full_name : string
	//mdp : string
	email : string
}
	

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }
  
  getInfos(): Observable<Profil> {
		return this.http.get<Profil>(config.url+'api/user', {withCredentials: !config["proxy-dev"]})
  
	}
}