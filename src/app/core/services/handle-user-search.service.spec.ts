import { TestBed } from '@angular/core/testing';

import { HandleUserSearchService } from './handle-user-search.service';

describe('HandleUserSearchService', () => {
  let service: HandleUserSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleUserSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
