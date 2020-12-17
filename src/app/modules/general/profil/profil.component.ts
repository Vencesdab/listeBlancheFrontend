import { Component, OnInit } from '@angular/core';
import { ProfilService } from './../../../services/profil.service';
import {Router} from '@angular/router';
import { FormBuilder } from '@angular/forms';

interface Profil {
	full_name : string
	//mdp : string
	email : string
}

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profil:Profil;
  nameForm;
  emailForm;
  passwordForm;
  emailPasswordForm;

  constructor(private profilService: ProfilService, private router: Router, private formBuilder: FormBuilder) {
    this.nameForm = this.formBuilder.group({
      nameitem: ''
    });
    this.emailForm = this.formBuilder.group({
      emailitem: ''
    });
    this.emailPasswordForm = this.formBuilder.group({
      emailpassworditem: ''
    });
    this.passwordForm = this.formBuilder.group({
      passworditem: ''
    });
  }

  ngOnInit(){this.profilService.getInfos().subscribe(data => {this.profil = data},
     error => {this.profil = {full_name:'None', email:'None'}});
  }

  onSubmitName(data) {
    this.profilService.putName(data.nameitem).subscribe(
      _result => location.reload(),
      _error => alert("Erreur du serveur.")
    )
  }

  onSubmitEmail(data) {
    this.profilService.putEmail(data.emailitem).subscribe(
      _result => location.reload(),
      _error => alert("Erreur du serveur.")
    )
  }

  onSubmitPassword(data) {
    this.profilService.putPassword(data.passworditem).subscribe(
      _result => location.reload(),
      _error => alert("Erreur du serveur.")
    )
  }

  onSubmitEmailPassword(data) {
    this.profilService.putEmailPassword(data.emailpassworditem).subscribe(
      _result => location.reload(),
      _error => alert("Erreur du serveur.")
    )
  }

}
