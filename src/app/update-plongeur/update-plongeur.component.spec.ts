import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlongeurComponent } from './update-plongeur.component';

describe('UpdatePlongeurComponent', () => {
  let component: UpdatePlongeurComponent;
  let fixture: ComponentFixture<UpdatePlongeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePlongeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlongeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
