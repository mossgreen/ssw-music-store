/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicesauthauthService } from './servicesauthauth.service';

describe('ServicesauthauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesauthauthService]
    });
  });

  it('should ...', inject([ServicesauthauthService], (service: ServicesauthauthService) => {
    expect(service).toBeTruthy();
  }));
});
