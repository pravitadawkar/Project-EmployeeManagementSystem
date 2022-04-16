import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainemployeeComponent } from './mainemployee.component';

describe('MainemployeeComponent', () => {
  let component: MainemployeeComponent;
  let fixture: ComponentFixture<MainemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
