import { TestBed } from '@angular/core/testing';

import { TesouroCategoriaService } from './tesouro-categoria.service';

describe('TesouroCategoriaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesouroCategoriaService = TestBed.get(TesouroCategoriaService);
    expect(service).toBeTruthy();
  });
});
