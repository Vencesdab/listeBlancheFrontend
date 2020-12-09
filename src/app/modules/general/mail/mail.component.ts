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
export class MailComponent implements OnInit {
	emails = [];
  selectedEmail:Email ;
  isSelected = true;
  email:Email;
  
  messageServerError = "Erreur lors du traitement de la requête par le serveur. Veuillez nous excuser pour la gêne occasionnée."

  constructor(private emailService: EmailService, private router: Router) { 
    //super(router);
  }

  ngOnInit(){this.emailService.getAllEmails().subscribe(data => {this.emails = data}, _error => {this.emails = []});}
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

  onRestore():void {
    this.emailService.restore(this.selectedEmail).subscribe(_result => location.reload(),_error => alert(this.messageServerError))
  }

  onDelete():void {
    this.emailService.delete(this.selectedEmail).subscribe(_result => location.reload(),_error => alert(this.messageServerError))
  }

  onWhiteList():void {
    this.emailService.putInWhiteList(this.selectedEmail).subscribe(_result => location.reload(),_error => alert(this.messageServerError))
  }

  onBlackList():void {
    this.emailService.putInBlackList(this.selectedEmail).subscribe(_result => location.reload(),_error => alert(this.messageServerError))
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
