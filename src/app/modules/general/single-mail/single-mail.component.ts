import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { EmailService } from '../../../email.service';
import { MailComponent } from '../mail/mail.component';

export interface Email {
	id: number
	fk_user: number
	email_sender: string
	email_subject: string
	created_at: string
}


@Component({
  selector: 'app-single-mail',
  templateUrl: './single-mail.component.html',
  styleUrls: ['./single-mail.component.css']
})
export class SingleMailComponent implements OnInit {
	name:string = 'Email';
	@Input() emails:Email[] ;
	email:Email;

  constructor(private emailService: EmailService, private route: ActivatedRoute) { }

  ngOnInit()  {
	//this.email = this.emails[0]//this.emails[0];//{id:1, fk_user:2, email_sender:"a@or.fr", email_subject:"test", created_at:"10"}
	this.email=this.emailService.email
	this.emails=this.emailService.emails
}
		
}


