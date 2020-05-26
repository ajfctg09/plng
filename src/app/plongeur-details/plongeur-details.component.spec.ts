import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlongeurDetailsComponent } from './plongeur-details.component';

describe('PlongeurDetailsComponent', () => {
  let component: PlongeurDetailsComponent;
  let fixture: ComponentFixture<PlongeurDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlongeurDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlongeurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
