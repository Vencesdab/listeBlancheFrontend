import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../../email.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
	emails = [];
	selectedEmail = [];

  constructor(private emailService: EmailService, private router: Router) { }

  ngOnInit(){this.emailService.getAllEmails().subscribe(data => {this.emails = data}, error => {this.emails = []});}
  
  goToMail(){
	  this.router.navigate(['single-mail']);
  }

}
