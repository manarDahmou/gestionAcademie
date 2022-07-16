import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFormeeComponent } from './display-formee.component';

describe('DisplayFormeeComponent', () => {
  let component: DisplayFormeeComponent;
  let fixture: ComponentFixture<DisplayFormeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFormeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFormeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
