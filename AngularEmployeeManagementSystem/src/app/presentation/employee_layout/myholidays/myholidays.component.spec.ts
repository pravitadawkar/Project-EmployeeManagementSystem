import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyholidaysComponent } from './myholidays.component';

describe('MyholidaysComponent', () => {
  let component: MyholidaysComponent;
  let fixture: ComponentFixture<MyholidaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyholidaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyholidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
