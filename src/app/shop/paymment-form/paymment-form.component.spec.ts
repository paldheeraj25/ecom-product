import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymmentFormComponent } from './paymment-form.component';

describe('PaymmentFormComponent', () => {
  let component: PaymmentFormComponent;
  let fixture: ComponentFixture<PaymmentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymmentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
