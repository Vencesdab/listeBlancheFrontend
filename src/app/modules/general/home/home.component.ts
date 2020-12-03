import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { HeaderComponent } from './../../../header/header.component';
import { EmailService } from './../../../services/email.service';
import { BaseComponentComponent } from './../../../base-component/base-component.component';
import { ProfilService } from './../../../services/profil.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

	profil;

  constructor(private profilService: ProfilService, private router: Router) { }

  ngOnInit(){this.profilService.getInfos().subscribe(data => {this.profil = data}, error => {this.profil = []});
  }

  onGoToLogin(){
    this.router.navigate(['login'])
    
    
  }
}

