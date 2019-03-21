import { TestBed } from '@angular/core/testing';

import { TesouroTipoService } from './tesouro-tipo.service';

describe('TesouroTipoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesouroTipoService = TestBed.get(TesouroTipoService);
    expect(service).toBeTruthy();
  });
});
