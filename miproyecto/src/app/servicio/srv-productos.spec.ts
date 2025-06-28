import { TestBed } from '@angular/core/testing';

import { SrvProductos } from './srv-productos';

describe('SrvProductos', () => {
  let service: SrvProductos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvProductos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
