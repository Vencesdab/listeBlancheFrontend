import { Component, OnInit } from '@angular/core';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-log-crea',
  templateUrl: './log-crea.component.html',
  styleUrls: ['./log-crea.component.css']
})
export class LogCreaComponent implements OnInit {
  haveAccount:boolean=true;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    //this.haveAccount = this.loginService.haveAccount
  }

  connect(){
    this.haveAccount = this.storageService.retrieve('haveAccount')
  }


}
