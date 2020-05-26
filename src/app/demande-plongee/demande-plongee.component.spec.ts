import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandePlongeeComponent } from './demande-plongee.component';

describe('DemandePlongeeComponent', () => {
  let component: DemandePlongeeComponent;
  let fixture: ComponentFixture<DemandePlongeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandePlongeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandePlongeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
