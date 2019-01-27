import { TestBed } from '@angular/core/testing';

import { BurnerService } from './burner.service';

describe('BurnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BurnerService = TestBed.get(BurnerService);
    expect(service).toBeTruthy();
  });
});
