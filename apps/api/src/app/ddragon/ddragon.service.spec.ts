import { TestBed } from '@angular/core/testing';

import { DdragonService } from './ddragon.service';

describe('DdragonService', () => {
  let service: DdragonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DdragonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
