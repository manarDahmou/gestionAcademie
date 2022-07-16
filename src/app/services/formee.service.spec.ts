import { TestBed } from '@angular/core/testing';

import { FormeeService } from './formee.service';

describe('FormeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormeeService = TestBed.get(FormeeService);
    expect(service).toBeTruthy();
  });
});
