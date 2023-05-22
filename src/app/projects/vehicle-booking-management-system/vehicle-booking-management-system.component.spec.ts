import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleBookingManagementSystemComponent } from './vehicle-booking-management-system.component';

describe('VehicleBookingManagementSystemComponent', () => {
  let component: VehicleBookingManagementSystemComponent;
  let fixture: ComponentFixture<VehicleBookingManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleBookingManagementSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleBookingManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
