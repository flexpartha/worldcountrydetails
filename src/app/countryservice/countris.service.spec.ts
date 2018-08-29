import { TestBed, inject } from '@angular/core/testing';

import { CountrisService } from './countris.service';

describe('CountrisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountrisService]
    });
  });

  it('should be created', inject([CountrisService], (service: CountrisService) => {
    expect(service).toBeTruthy();
  }));
});
