import { Component, OnInit } from '@angular/core';
import { Email, EmailService } from './services/email.service';
import { MailComponent } from './modules/general/mail/mail.component';
import { SingleMailComponent } from './modules/general/single-mail/single-mail.component';
import { ProfilService } from './services/profil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Projet liste ';

  email: Email;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}
}
