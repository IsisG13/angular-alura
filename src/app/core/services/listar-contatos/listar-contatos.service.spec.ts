import { TestBed } from '@angular/core/testing';

import { ListarContatosService } from './listar-contatos.service';

describe('ListarContatosService', () => {
  let service: ListarContatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarContatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
