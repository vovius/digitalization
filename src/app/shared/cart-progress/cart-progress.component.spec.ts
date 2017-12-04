import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProgressComponent } from './cart-progress.component';

describe('CartProgressComponent', () => {
  let component: CartProgressComponent;
  let fixture: ComponentFixture<CartProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
