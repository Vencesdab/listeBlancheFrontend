import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
	email:Email ;

  constructor(private emailService: EmailService, private route: ActivatedRoute) { }

  ngOnInit()  {
    this.email = {id:1, fk_user:2, email_sender:"a@or.fr", email_subject:"test", created_at:"10"}
}
		
}


