import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceManagementSystemComponent } from './finance-management-system.component';

describe('FinanceManagementSystemComponent', () => {
  let component: FinanceManagementSystemComponent;
  let fixture: ComponentFixture<FinanceManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceManagementSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
