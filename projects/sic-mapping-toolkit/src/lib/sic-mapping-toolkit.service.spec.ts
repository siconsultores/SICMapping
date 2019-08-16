import { TestBed } from '@angular/core/testing';

import { SicMappingToolkitService } from './sic-mapping-toolkit.service';

describe('SicMappingToolkitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SicMappingToolkitService = TestBed.get(SicMappingToolkitService);
    expect(service).toBeTruthy();
  });
});
