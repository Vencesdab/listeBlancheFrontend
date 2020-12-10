import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-log-crea',
  templateUrl: './log-crea.component.html',
  styleUrls: ['./log-crea.component.css']
})
export class LogCreaComponent implements OnInit {
  haveAccount:boolean=true;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    //this.haveAccount = this.loginService.haveAccount
  }

  connect(){
    this.haveAccount = this.loginService.haveAccount
  }


}
