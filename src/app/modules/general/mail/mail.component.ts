import { Component, Input, OnInit } from '@angular/core';
import { EmailService } from './../../../services/email.service';
import {Router} from '@angular/router';
import { SingleMailComponent } from '../single-mail/single-mail.component';
import { HeaderComponent } from './../../../header/header.component';

export interface Email {
	id: number
	fk_user: number
	email_sender: string
	email_subject: string
	created_at: string
}

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent extends HeaderComponent implements OnInit {
	emails = [];
  selectedEmail:Email ;
  isSelected = true;
  email:Email;
  

  constructor(private emailService: EmailService, private router: Router) { 
    super();
  }

  ngOnInit(){this.emailService.getAllEmails().subscribe(data => {this.emails = data}, error => {this.emails = []});}
  //ngOnInit(){this.emails = [
  //  {fk_user:2, email_sender:"a@or.fr", email_subject:"test", created_at:"10"}, 
  //  {fk_user:1, email_sender:"a@or.fr", email_subject:"test2", created_at:"11"}
  //  ];
  //this.selectedEmail=
//}
  
  
  onGoToMail(){
    this.emailService.email = this.selectedEmail
    //this.emailService.email = this.selectedEmail[0];
    this.router.navigate(['single-mail'])
    
    
  }

  

  /**select(){
    if (this.selectedEmail != []){
      this.isSelected = true;
    }
  }

  selectionChanged(){
    if (this.selectedEmail != null){
      this.isSelected = true;
    }
  }**/

}
