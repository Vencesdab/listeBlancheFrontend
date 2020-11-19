import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../../email.service';
import {Router} from '@angular/router';

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
export class MailComponent implements OnInit {
	emails = [];
  selectedEmail:Email[] ;
  isSelected = true;

  constructor(private emailService: EmailService, private router: Router) { }

  //ngOnInit(){this.emailService.getAllEmails().subscribe(data => {this.emails = data}, error => {this.emails = []});}
  ngOnInit(){this.emails = [
    {fk_user:2, email_sender:"a@or.fr", email_subject:"test", created_at:"10"}, 
    {fk_user:1, email_sender:"a@or.fr", email_subject:"test2", created_at:"11"}
    ];
  //this.selectedEmail=[]
}
  
  
  onGoToMail(){
    this.router.navigate(['single-mail']);
    
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
