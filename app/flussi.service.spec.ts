import { TestBed } from '@angular/core/testing';

import { FlussiService } from './flussi.service';

describe('FlussiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlussiService = TestBed.get(FlussiService);
    expect(service).toBeTruthy();
  });
});
