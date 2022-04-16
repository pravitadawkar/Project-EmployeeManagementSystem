import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MynoticeComponent } from './mynotice.component';

describe('MynoticeComponent', () => {
  let component: MynoticeComponent;
  let fixture: ComponentFixture<MynoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MynoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MynoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
