import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ListService } from '../../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  addInWhiteListForm;
  addInBlackListForm;
  whitelist: string[] = [];
  blacklist: string[] = [];
  whiteemail: string;
  blackemail: string;
  selectedWhite : String;
  selectedBlack : String;

  messageServerError =
    'Erreur lors du traitement de la requête par le serveur. Veuillez nous excuser pour la gêne occasionnée.';

  constructor(private listService: ListService, private formBuilder: FormBuilder) {
    this.addInWhiteListForm = this.formBuilder.group({
      whiteemailitem: ''
    });
    this.addInBlackListForm = this.formBuilder.group({
      blackemailitem: ''
    });
  }

  ngOnInit() {
    this.listService.getFromWhiteList().subscribe(
      whitedata => {
        this.whitelist = whitedata;
        this.listService.getFromBlackList().subscribe(
          blackdata => (this.blacklist = blackdata),
          _error => (this.blacklist = [])
        );
      },
      _error => (this.whitelist = [])
    );
  }

  onWhiteListSubmit(data) {
    this.addInWhiteListForm.reset();
    this.listService.postInWhiteList(data.whiteemailitem).subscribe(
      _result => location.reload(),
      _error => alert('Erreur lors du changemement')
    );
  }

  onBlackListSubmit(data) {
    this.addInBlackListForm.reset();
    this.listService.postInBlackList(data.blackemailitem).subscribe(
      _result => location.reload(),
      _error => alert('Erreur lors du changemement')
    );
  }

  onDeleteWhite(): void {
    this.addInWhiteListForm.reset();
    this.listService.deleteWhite(this.selectedWhite).subscribe(
      _result => location.reload(),
      _error => alert(this.messageServerError)
    );
  }

  onDeleteBlack(): void {
    this.addInBlackListForm.reset();
    this.listService.deleteBlack(this.selectedBlack).subscribe(
      _result => location.reload(),
      _error => alert(this.messageServerError)
    );
  }
}
