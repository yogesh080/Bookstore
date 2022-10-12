import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuccessMsgComponent } from './order-success-msg.component';

describe('OrderSuccessMsgComponent', () => {
  let component: OrderSuccessMsgComponent;
  let fixture: ComponentFixture<OrderSuccessMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSuccessMsgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSuccessMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
