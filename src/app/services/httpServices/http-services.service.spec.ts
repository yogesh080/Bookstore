import { TestBed } from '@angular/core/testing';

import { HttpServiceService } from './http-services.service';

describe('HttpServicesService', () => {
  let service: HttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
