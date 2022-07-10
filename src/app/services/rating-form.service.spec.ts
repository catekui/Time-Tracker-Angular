import { TestBed } from '@angular/core/testing';

import { RatingFormService } from './rating-form.service';

describe('RatingFormService', () => {
  let service: RatingFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
