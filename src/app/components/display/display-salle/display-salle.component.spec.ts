import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySalleComponent } from './display-salle.component';

describe('DisplaySalleComponent', () => {
  let component: DisplaySalleComponent;
  let fixture: ComponentFixture<DisplaySalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
