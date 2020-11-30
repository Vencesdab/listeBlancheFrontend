import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm;

  constructor(private loginService: LoginService ,private formBuilder: FormBuilder,  private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(data) {
    this.checkoutForm.reset();
    this.loginService.login(data).subscribe(res => {
      if (res.setCookie) this.router.navigate(['mail']) 
    })
      
  }

}
