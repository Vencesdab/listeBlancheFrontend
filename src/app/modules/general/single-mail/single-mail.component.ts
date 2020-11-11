import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { EmailService } from '../../../email.service';

@Component({
  selector: 'app-single-mail',
  templateUrl: './single-mail.component.html',
  styleUrls: ['./single-mail.component.css']
})
export class SingleMailComponent implements OnInit {
	name:string = 'Email';
	email = [];

  constructor(private emailService: EmailService, private route: ActivatedRoute) { }

  ngOnInit()  {
	  this.emailService.getAllEmails().subscribe(data => {this.email = data}, error => {this.email = []});
	  this.name = this.route.snapshot.params['id'];
}
		
}


