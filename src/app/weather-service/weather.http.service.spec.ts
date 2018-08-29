import { TestBed, inject } from '@angular/core/testing';

import { Weather.HttpService } from './weather.http.service';

describe('Weather.HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Weather.HttpService]
    });
  });

  it('should be created', inject([Weather.HttpService], (service: Weather.HttpService) => {
    expect(service).toBeTruthy();
  }));
});
