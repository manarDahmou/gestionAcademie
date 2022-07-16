import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStagiereComponent } from './add-stagiere.component';

describe('AddStagiereComponent', () => {
  let component: AddStagiereComponent;
  let fixture: ComponentFixture<AddStagiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStagiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStagiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
