import { Component, OnInit } from '@angular/core';
import { Email, EmailService } from './services/email.service';
import { MailComponent } from './modules/general/mail/mail.component';
import { SingleMailComponent } from './modules/general/single-mail/single-mail.component';
import { ProfilService } from './services/profil.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { CaptchaService } from './services/captcha.service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Projet liste ';
  name:String
  email:Email;
  captcha:boolean = false
  
  
  
  
  
  constructor(private emailService: EmailService, private route:ActivatedRoute, private captchaService:CaptchaService) { }
  
  ngOnInit() : void {
    this.name = location.pathname
    if (this.name.includes("/verify")){
      this.captchaService.setCaptcha()
    }
    this.captcha = this.captchaService.getCaptcha()
  }


}
