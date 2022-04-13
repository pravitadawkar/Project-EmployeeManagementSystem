import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpleaveComponent } from './update-empleave.component';

describe('UpdateEmpleaveComponent', () => {
  let component: UpdateEmpleaveComponent;
  let fixture: ComponentFixture<UpdateEmpleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmpleaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
