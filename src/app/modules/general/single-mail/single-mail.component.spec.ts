import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMailComponent } from './single-mail.component';

describe('SingleMailComponent', () => {
  let component: SingleMailComponent;
  let fixture: ComponentFixture<SingleMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
