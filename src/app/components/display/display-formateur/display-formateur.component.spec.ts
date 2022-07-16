import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFormateurComponent } from './display-formateur.component';

describe('DisplayFormateurComponent', () => {
  let component: DisplayFormateurComponent;
  let fixture: ComponentFixture<DisplayFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
