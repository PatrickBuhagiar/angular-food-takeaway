import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFoodComponent } from './book-food.component';

describe('BookFoodComponent', () => {
  let component: BookFoodComponent;
  let fixture: ComponentFixture<BookFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
