import { Component, OnInit } from '@angular/core';
import { Email, EmailService } from './email.service';
import { ProfilService } from './profil.service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Projet liste ';

  email:Email;
  
  
  
  constructor(private emailService: EmailService) { }
  
  ngOnInit() : void {
    //this.email=this.emailService.email;
  }
}
