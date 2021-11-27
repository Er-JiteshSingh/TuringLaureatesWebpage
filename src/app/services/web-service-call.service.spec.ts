import { TestBed } from '@angular/core/testing';

import { WebServiceCallService } from './web-service-call.service';

describe('WebServiceCallService', () => {
  let service: WebServiceCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebServiceCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
