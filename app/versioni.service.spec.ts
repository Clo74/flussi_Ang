import { TestBed } from '@angular/core/testing';

import { VersioniService } from './versioni.service';

describe('VersioniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VersioniService = TestBed.get(VersioniService);
    expect(service).toBeTruthy();
  });
});
