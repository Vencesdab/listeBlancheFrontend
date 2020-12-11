import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import config  from './../config.json';
import { Storable, StorageService } from './storage.service';

export interface cookieSetter {
  setCookie: boolean
}

interface IsConnected {
  connected: boolean
  }

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{
  adresse = config.url + 'login';
  adresse2 = config.url + 'api/connect';
  response;
  

  constructor(private http: HttpClient, private storageService: StorageService) {
    }

  ngOnInit() : void {
    this.storageService.store(Storable.haveAccount,true)
  }

  
  //Fonction activée avec le bouton qui authentifie l'utilisateur avec la bdd
  login(userdata) {
    const request = '{"email": "'+ userdata.email+'","password": "'+userdata.password+'"}';
    const headers = { 'content-type': 'application/json'}  
    this.http.post<cookieSetter>(this.adresse, request, {'headers':headers, withCredentials: !config["proxy-dev"]})
      .subscribe(res => this.storageService.store(Storable.isAuth,res.setCookie));
    return this.http.post<cookieSetter>(this.adresse, request, {'headers':headers, withCredentials: !config["proxy-dev"]});
  }

  //Fonction qui permet de voir si l'utilisateur est connecté
  isConnected(): boolean{
      this.http.get<IsConnected>(this.adresse2, {withCredentials: !config["proxy-dev"]}).subscribe(
        isConnected => this.storageService.store(Storable.isAuth,isConnected.connected),
        _error => alert('Pas connecté'));
      return this.storageService.retrieve(Storable.isAuth)
      
  }

  signUp(){
    this.storageService.store(Storable.haveAccount,false)
  }
}
