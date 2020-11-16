import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
