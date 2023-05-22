import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoGarageComponent } from './auto-garage.component';

describe('AutoGarageComponent', () => {
  let component: AutoGarageComponent;
  let fixture: ComponentFixture<AutoGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoGarageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
