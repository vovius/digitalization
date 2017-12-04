import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumTypeComponent } from './medium-type.component';

describe('MediumTypeComponent', () => {
  let component: MediumTypeComponent;
  let fixture: ComponentFixture<MediumTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
