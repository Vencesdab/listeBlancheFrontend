import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../../../profil.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
	profil;

  constructor(private profilService: ProfilService, private router: Router) { }

  ngOnInit(){this.profilService.getInfos().subscribe(data => {this.profil = data}, error => {this.profil = []});
  }

}
