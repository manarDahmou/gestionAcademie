import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFormationComponent } from './display-formation.component';

describe('DisplayFormationComponent', () => {
  let component: DisplayFormationComponent;
  let fixture: ComponentFixture<DisplayFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
