import { TestBed } from '@angular/core/testing';

import { MyFirstServiceService } from './my-first-service.service';

describe('MyFirstServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyFirstServiceService = TestBed.get(MyFirstServiceService);
    expect(service).toBeTruthy();
  });
});
