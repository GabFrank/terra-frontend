import { TestBed } from '@angular/core/testing';

import { BackendProprietariosService } from './backend-proprietarios.service';

describe('BackendProprietariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendProprietariosService = TestBed.get(BackendProprietariosService);
    expect(service).toBeTruthy();
  });
});
