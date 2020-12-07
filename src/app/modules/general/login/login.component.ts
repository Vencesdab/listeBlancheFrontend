import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './../../../services/login.service';
import { HeaderComponent } from './../../../header/header.component';
import { EmailService } from './../../../services/email.service';
import { BaseComponentComponent } from './../../../base-component/base-component.component';
import { Input } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm;
  
  
  
  

  constructor(private baseComponent:BaseComponentComponent, 
    private emailService:EmailService, private loginService: LoginService ,private formBuilder: FormBuilder,  private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: ''
    });
    
  }

  ngOnInit(): void {
    
  }

 
  //Quand on clique sur le bouton 'se connecter' :
  // - on regarde avec la bdd si le mdp et l'id sont valides
  // - on actualise le baseComponeent en conséquence en fonction de la réponse grâce a la fonction connect()
  onSubmit(data) {
    this.checkoutForm.reset();
    this.loginService.login(data).subscribe(res => {
      if (res.setCookie) {
        this.baseComponent.connect()
        this.router.navigate(['']) 
        }
    })
      
  }

  goSignUp(){
    this.router.navigate(['create-account'])
  }

}
