import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlongeurListComponent } from './plongeur-list.component';

describe('PlongeurListComponent', () => {
  let component: PlongeurListComponent;
  let fixture: ComponentFixture<PlongeurListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlongeurListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlongeurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
