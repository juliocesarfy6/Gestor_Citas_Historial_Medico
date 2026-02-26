import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarToken } from './validar-token';

describe('ValidarToken', () => {
  let component: ValidarToken;
  let fixture: ComponentFixture<ValidarToken>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarToken]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarToken);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
