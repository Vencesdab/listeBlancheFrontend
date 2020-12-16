import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponentComponent } from 'src/app/base-component/base-component.component';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { LogCreaComponent } from './../../../log-crea/log-crea.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  creationForm;
  submitted: boolean = false;
  

  constructor(
    private baseComponent:BaseComponentComponent,
    private userService: UserService ,
    private formBuilder: FormBuilder, 
    private router: Router,
    private logCreaComponent: LogCreaComponent
  ) {
    this.creationForm = this.formBuilder.group({
      email: ['', Validators.required],
      email_password: ['', Validators.required],
      full_name: ['', Validators.required],
      password: ['', Validators.required]
    });
    
  }

  ngOnInit(): void {
  }

  //
  get f() { return this.creationForm.controls; }

  onSubmit(data): void{
    this.submitted = true;
    
    if (this.creationForm.invalid) {
      return;
  }
    
    this.userService.create(data).subscribe(
      _status => {
        this.baseComponent.connect()
        this.logCreaComponent.connect()
        this.router.navigate([''])  
      },
      _error => alert("création échouée")
    )
  }

  





}
