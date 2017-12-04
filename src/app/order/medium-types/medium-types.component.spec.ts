import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumTypesComponent } from './medium-types.component';

describe('MediumTypesComponent', () => {
  let component: MediumTypesComponent;
  let fixture: ComponentFixture<MediumTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
