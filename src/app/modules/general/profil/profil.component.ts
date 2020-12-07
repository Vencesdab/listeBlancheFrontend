import { Component, OnInit } from '@angular/core';
import { ProfilService } from './../../../services/profil.service';
import {Router} from '@angular/router';

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

  constructor(private profilService: ProfilService, private router: Router) { }

  ngOnInit(){this.profilService.getInfos().subscribe(data => {this.profil = data},
     error => {this.profil = {full_name:'None', email:'None'}});
  }

}
