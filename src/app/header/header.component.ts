import { Component, OnInit } from '@angular/core';
import { Email, EmailService } from './../services/email.service';
import { MailComponent } from './../modules/general/mail/mail.component';
import { SingleMailComponent } from './../modules/general/single-mail/single-mail.component';
import { ProfilService } from './../services/profil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Projet liste ';

  constructor(private router: Router) {}

  ngOnInit(): void {
    //this.router.navigate(['home'])
  }

  goHome() {
    this.router.navigate(['home']);
  }

  goMail() {
    this.router.navigate(['mail']);
  }

  goList() {
    this.router.navigate(['list']);
  }

  goProfil() {
    this.router.navigate(['profil']);
  }
}
