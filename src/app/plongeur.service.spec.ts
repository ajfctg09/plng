import { TestBed } from '@angular/core/testing';

import { PlongeurService } from './plongeur.service';

describe('PlongeurService', () => {
  let service: PlongeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlongeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
