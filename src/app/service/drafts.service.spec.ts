import { TestBed, inject } from '@angular/core/testing';

import { DraftsService } from './drafts.service';

describe('DraftService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DraftsService]
    });
  });

  it('should ...', inject([DraftsService], (service: DraftsService) => {
    expect(service).toBeTruthy();
  }));
});
