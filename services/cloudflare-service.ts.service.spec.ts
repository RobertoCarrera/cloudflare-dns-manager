import { TestBed } from '@angular/core/testing';

import { CloudflareServiceTsService } from './cloudflare-service.ts.service';

describe('CloudflareServiceTsService', () => {
  let service: CloudflareServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudflareServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
