import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../../email.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
	emails = [];

  constructor(private emailService: EmailService) { }

  ngOnInit(){this.emailService.getAllEmails().subscribe(data => {this.emails = data}, error => {this.emails = []});}

}
