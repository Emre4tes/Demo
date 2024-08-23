import { TestBed } from '@angular/core/testing';

import { YurtService } from './yurt.service';

describe('YurtService', () => {
  let service: YurtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YurtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
