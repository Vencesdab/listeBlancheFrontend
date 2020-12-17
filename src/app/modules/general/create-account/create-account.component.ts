import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponentComponent } from 'src/app/base-component/base-component.component';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { LogCreaComponent } from './../../../log-crea/log-crea.component';
import { HelpComponent } from 'src/app/modules/general/help/help.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  creationForm;

  constructor(
    private baseComponent:BaseComponentComponent,
    private userService: UserService ,
    private formBuilder: FormBuilder,
    private router: Router,
    private logCreaComponent: LogCreaComponent
  ) {
    this.creationForm = this.formBuilder.group({
      email: '',
      email_password: '',
      full_name: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data): void{
    this.userService.create(data).subscribe(
      _status => {
        this.baseComponent.connect()
        this.logCreaComponent.connect()
        this.router.navigate([''])
      },
      _error => alert("création échouée")
    )
  }

  //goToHelp(){
    //this.helpComp.connect()
  //  this.router.navigate(['help'])
  //}

}
