import { Component, OnInit } from '@angular/core';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css']
})

export class BaseComponentComponent implements OnInit {
  isauth:boolean 
  title = 'titre';
  
  

  constructor(private storageService:StorageService
    ) {
   }

  ngOnInit(): void {
    this.isauth = this.storageService.retrieve('isauth')
  }

  //Permet d'actualiser la donnée 'isauth' de baseComponent avec une action.
  //Comme ça, dès qu'on revient au BaseComponent, il sait quelle page afficher : 
  // - soit login (sans header), 
  // - soit home (avec header) 
  connect(){
    this.isauth = this.storageService.retrieve('isauth')
  }

}
