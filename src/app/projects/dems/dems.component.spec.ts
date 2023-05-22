import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemsComponent } from './dems.component';

describe('DemsComponent', () => {
  let component: DemsComponent;
  let fixture: ComponentFixture<DemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
