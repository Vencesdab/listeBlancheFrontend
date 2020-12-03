import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { HeaderComponent } from './../../../header/header.component';
import { EmailService } from './../../../services/email.service';
import { BaseComponentComponent } from './../../../base-component/base-component.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  

  constructor(private emailService:EmailService, public router: Router) {
    
    
  }
  

  ngOnInit(): void {
  }

  

}
