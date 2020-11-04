import { Component, OnInit } from '@angular/core';
import { EmailService } from './email.service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'listeBlancheFrontend';
  emails = [];
  
  constructor(private emailService: EmailService) { }
  
  ngOnInit(){this.emailService.getAllEmails().subscribe(data => {this.emails = data}, error => {this.emails = []});}
}
