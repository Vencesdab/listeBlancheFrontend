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
  isauth:boolean //= this.loginService.isauth;
  title = 'titre';
  
  

  constructor(private loginService:LoginService
    ) {
    //this.isauth = this.loginService.isauth
    
   }

  ngOnInit(): void {
    //this.isauth = this.loginService.isauth
    this.isauth = this.loginService.isauth
  }

  connect(){
    this.isauth = this.loginService.isauth
  }

}
