import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { BaseComponentComponent } from './../../../base-component/base-component.component';
import { ProfilService } from './../../../services/profil.service';


interface Profil {
	full_name : string
	//mdp : string
	email : string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  profil:Profil;
  full_name:string;
  email:string;


  constructor(private baseComp:BaseComponentComponent, private profilService: ProfilService, private loginService:LoginService, private router: Router) { }

  ngOnInit(){
    this.profilService.getInfos().subscribe(data => {this.profil = data},
     error => {this.profil = {full_name:'None', email:'None'}});
    //this.full_name=this.profil.full_name
    //this.email=this.profil.email
  }

  onGoToLogin(){
    this.loginService.isauth = false
    this.baseComp.connect()
    this.router.navigate(['base'])
    
    
  }
}

