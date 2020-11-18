import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Profil {
	nom : string
	mdp : string
	mail : string
}
	

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }
  
  getInfos(): Observable<Profil> {
		return this.http.get<Profil>('http://localhost:8000/api/emails')
		//return this.http.get<Email[]>('http://23d807666b40.ngrok.io/api/emails')
  
	}
}