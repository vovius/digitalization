import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponSelectorComponent } from './coupon-selector.component';

describe('CouponSelectorComponent', () => {
  let component: CouponSelectorComponent;
  let fixture: ComponentFixture<CouponSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
