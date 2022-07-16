import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaystagiereComponent } from './displaystagiere.component';

describe('DisplaystagiereComponent', () => {
  let component: DisplaystagiereComponent;
  let fixture: ComponentFixture<DisplaystagiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaystagiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaystagiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
