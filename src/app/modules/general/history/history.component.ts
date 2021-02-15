import { Component, OnInit } from '@angular/core';
import { HistoryService } from './../../../services/history.service';
import { Router } from '@angular/router';
import { SingleMailComponent } from '../single-mail/single-mail.component';
import { HeaderComponent } from './../../../header/header.component';

export interface HistEmail {
  id: number;
  fk_user: number;
  email_sender: string;
  email_subject: string;
  reason: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  emails = [];
  selectedEmail: HistEmail;
  isSelected = true;
  email: HistEmail;

  messageServerError =
    'Erreur lors du traitement de la requête par le serveur. Veuillez nous excuser pour la gêne occasionnée.';

  constructor(private historyService: HistoryService, private router: Router) {
    //super(router);
  }

  ngOnInit() {
    this.historyService.getHistoryEmails().subscribe(
      data => {
        this.emails = data;
      },
      _error => {
        this.emails = [];
      }
    );
  }

}
