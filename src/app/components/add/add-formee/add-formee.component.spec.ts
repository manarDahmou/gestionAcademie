import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormeeComponent } from './add-formee.component';

describe('AddFormeeComponent', () => {
  let component: AddFormeeComponent;
  let fixture: ComponentFixture<AddFormeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
