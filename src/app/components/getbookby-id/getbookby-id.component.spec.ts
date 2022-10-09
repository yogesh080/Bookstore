import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetbookbyIdComponent } from './getbookby-id.component';

describe('GetbookbyIdComponent', () => {
  let component: GetbookbyIdComponent;
  let fixture: ComponentFixture<GetbookbyIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetbookbyIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetbookbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
