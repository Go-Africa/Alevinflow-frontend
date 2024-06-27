import { TestBed } from '@angular/core/testing';

import { ProductionResolver } from './production.resolver';

describe('InternResolver', () => {
  let resolver: ProductionResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ProductionResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
