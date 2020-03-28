import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderInInfoComponent } from './order-in-info.component';

describe('OrderInInfoComponent', () => {
  let component: OrderInInfoComponent;
  let fixture: ComponentFixture<OrderInInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderInInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderInInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
