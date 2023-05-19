import { TestBed } from '@angular/core/testing';

import { MealsServiceService } from './meals-service.service';

describe('MealsServiceService', () => {
  let service: MealsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
