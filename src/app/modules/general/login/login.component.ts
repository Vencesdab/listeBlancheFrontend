import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { HeaderComponent } from './../../../header/header.component';
import { EmailService } from './../../../services/email.service';
import { BaseComponentComponent } from './../../../base-component/base-component.component';
import { Input } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm;
  isauth: boolean ;
  
  
  

  constructor(private baseComponent:BaseComponentComponent, 
    private emailService:EmailService, private loginService: LoginService ,private formBuilder: FormBuilder,  private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: ''
    });
    //this.isauth = false
  }

  ngOnInit(): void {
    this.isauth = this.loginService.estConnecte()
  }

 

  onSubmit(data) {
    this.checkoutForm.reset();
    this.isauth = this.loginService.isauth
    this.loginService.login(data).subscribe(res => {
      if (res.setCookie) {
        this.isauth = this.loginService.estConnecte()
        this.baseComponent.connect()
        this.router.navigate(['']) 
        }
    })
      
  }

}
