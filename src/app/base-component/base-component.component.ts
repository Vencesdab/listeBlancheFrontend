import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeoutError } from 'rxjs';
import { LoginService } from '../services/login.service';
import { LoginComponent } from '../modules/general/login/login.component';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css']
})

export class BaseComponentComponent implements OnInit {
  isauth:boolean 
  title = 'titre';
  
  

  constructor(private loginService:LoginService
    ) {
   }

  ngOnInit(): void {
    this.isauth = this.loginService.isauth
  }

  //Permet d'actualiser la donnée 'isauth' de baseComponent avec une action.
  //Comme ça, dès qu'on revient au BaseComponent, il sait quelle page afficher : 
  // - soit login (sans header), 
  // - soit home (avec header) 
  connect(){
    this.isauth = this.loginService.isauth
  }

}
