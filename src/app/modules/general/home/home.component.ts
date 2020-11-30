import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProfilService } from 'src/app/profil.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	profil;

  constructor(private profilService: ProfilService, private router: Router) { }

  ngOnInit(){this.profilService.getInfos().subscribe(data => {this.profil = data}, error => {this.profil = []});
  }

  onGoToLogin(){
    this.router.navigate(['login'])
    
    
  }
}

