import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOutInfoComponent } from './order-out-info.component';

describe('OrderOutInfoComponent', () => {
  let component: OrderOutInfoComponent;
  let fixture: ComponentFixture<OrderOutInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderOutInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOutInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
