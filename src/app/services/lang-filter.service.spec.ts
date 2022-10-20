import { TestBed } from '@angular/core/testing';

import { LangFilterService } from './lang-filter.service';

describe('LangFilterService', () => {
  let service: LangFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
