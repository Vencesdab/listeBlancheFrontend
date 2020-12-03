import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import url from './../config.json';

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
		return this.http.get<Profil>('http://localhost:8070/api/user')
		//return this.http.get<Profil>(url+'api/user')
  
	}
}