import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsideAssistanceComponent } from './roadside-assistance.component';

describe('RoadsideAssistanceComponent', () => {
  let component: RoadsideAssistanceComponent;
  let fixture: ComponentFixture<RoadsideAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadsideAssistanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadsideAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
