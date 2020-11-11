import { Component, OnInit } from '@angular/core';
import { EmailService } from './email.service';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'listeBlancheFrontend';
  
  
  constructor() { }
  
  ngOnInit() : void {}
}
