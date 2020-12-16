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
  
  constructor(private listService: ListService,private formBuilder: FormBuilder) {
    this.addInWhiteListForm = this.formBuilder.group({
      email: ''
    });
  }

  ngOnInit() {
  }

  onWhiteListSubmit(data) {
    this.addInWhiteListForm.reset();
    this.listService.postInWhiteList(data.email).subscribe();
  }

}
