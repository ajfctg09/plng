import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDemandeComponent } from './formulaire-demande.component';

describe('FormulaireDemandeComponent', () => {
  let component: FormulaireDemandeComponent;
  let fixture: ComponentFixture<FormulaireDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
