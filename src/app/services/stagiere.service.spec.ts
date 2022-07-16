import { TestBed } from '@angular/core/testing';

import { StagiereService } from './stagiere.service';

describe('StagiereService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StagiereService = TestBed.get(StagiereService);
    expect(service).toBeTruthy();
  });
});
