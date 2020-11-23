import {TestBed} from '@angular/core/testing';

import {AvailabilityService} from './availability.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AvailabilityService', () => {
  let service: AvailabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AvailabilityService]
    });
    service = TestBed.inject(AvailabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
