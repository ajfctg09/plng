import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlongeurComponent } from './create-plongeur.component';

describe('CreatePlongeurComponent', () => {
  let component: CreatePlongeurComponent;
  let fixture: ComponentFixture<CreatePlongeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlongeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlongeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
