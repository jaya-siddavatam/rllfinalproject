import { TestBed } from '@angular/core/testing';

import { ShareBookService } from './share-book.service';

describe('ShareInfooService', () => {
  let service: ShareBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
