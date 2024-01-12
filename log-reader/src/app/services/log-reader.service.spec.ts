import { TestBed } from '@angular/core/testing';

import { LogReaderService } from './log-reader.service';

describe('LogReaderService', () => {
  let service: LogReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
