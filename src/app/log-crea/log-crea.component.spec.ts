import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogCreaComponent } from './log-crea.component';

describe('LogCreaComponent', () => {
  let component: LogCreaComponent;
  let fixture: ComponentFixture<LogCreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogCreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogCreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
