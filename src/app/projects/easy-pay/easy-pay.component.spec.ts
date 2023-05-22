import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyPayComponent } from './easy-pay.component';

describe('EasyPayComponent', () => {
  let component: EasyPayComponent;
  let fixture: ComponentFixture<EasyPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
