import { Component, OnInit } from '@angular/core';
import { HistoryService } from './../../../services/history.service';
import { Router } from '@angular/router';
import { SingleMailComponent } from '../single-mail/single-mail.component';
import { HeaderComponent } from './../../../header/header.component';

export interface History {
  email_sender: string;
  email_subject: string;
  reason: string;
  created_at: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  
  selectedEmail: History;
  isSelected = true;
  emails: History[];

  messageServerError =
    'Erreur lors du traitement de la requête par le serveur. Veuillez nous excuser pour la gêne occasionnée.';

  constructor(private historyService: HistoryService, private router: Router) {
    //super(router);
  }

  ngOnInit() {
    this.historyService.getAllHistory().subscribe(
      data => {
        this.emails = data;
      },
      _error => {
        this.emails = [];
      }
    );
  }

  /**ngOnInit(){this.emails = [
    {email_sender:"a@or.fr", email_subject:"test", reason:"black_list", created_at:"10"},
    {email_sender:"a@or.fr", email_subject:"test2", reason:"white_list", created_at:"11"}
    ];

  }**/
}
