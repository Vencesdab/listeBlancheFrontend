import { HttpClient } from '@angular/common/http';
import { Injectable, Input, OnInit } from '@angular/core';
import config  from './../config.json';

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
  isauth:boolean;
  response;
  

  constructor(private http: HttpClient) {
      //const headers = { 'content-type': 'application/json'} 
      //this.connected  = this.http.get(this.adresse2, {'headers':headers, withCredentials: !config["proxy-dev"]});
      //this.isauth = this.connected.connected == true;
     }

  ngOnInit() : void {
    //const headers = { 'content-type': 'application/json'} 
    //this.http.get<IsConnected>(this.adresse2, {withCredentials: !config["proxy-dev"]}).subscribe(
      //isConnected => {
        //if (isConnected.connected){
          //this.isauth = isConnected.connected
        //} else {
          //this.isauth = false
        //} }, error => {alert('Pas connecté')});
  }

  
  //Fonction activée avec le bouton qui authentifie l'utilisateur avec la bdd
  login(userdata) {
    const request = '{"email": "'+ userdata.email+'","password": "'+userdata.password+'"}';
    const headers = { 'content-type': 'application/json'}  
    //return this.http.post<cookieSetter>(url + 'login', request, {'headers':headers});
    this.http.post<cookieSetter>(this.adresse, request, {'headers':headers, withCredentials: !config["proxy-dev"]}).subscribe(res => {this.isauth = res.setCookie});
    return this.http.post<cookieSetter>(this.adresse, request, {'headers':headers, withCredentials: !config["proxy-dev"]});
  }

  //Fonction qui permet de voir si l'utilisateur est connecté
  isConnected(){
      //const headers = { 'content-type': 'application/json'} 
      this.http.get<IsConnected>(this.adresse2, {withCredentials: !config["proxy-dev"]}).subscribe(
        isConnected => {this.isauth =  isConnected.connected}, error => {alert('Pas connecté')});
      return this.isauth
      
  }
}
