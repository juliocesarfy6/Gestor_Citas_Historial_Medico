import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarToken } from './generar-token';

describe('GenerarToken', () => {
  let component: GenerarToken;
  let fixture: ComponentFixture<GenerarToken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerarToken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarToken);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
