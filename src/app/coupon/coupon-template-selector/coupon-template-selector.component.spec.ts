import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponTemplateSelectorComponent } from './coupon-template-selector.component';

describe('CouponTemplateSelectorComponent', () => {
  let component: CouponTemplateSelectorComponent;
  let fixture: ComponentFixture<CouponTemplateSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponTemplateSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponTemplateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
