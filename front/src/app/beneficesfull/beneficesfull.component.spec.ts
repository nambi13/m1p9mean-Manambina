import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficesfullComponent } from './beneficesfull.component';

describe('BeneficesfullComponent', () => {
  let component: BeneficesfullComponent;
  let fixture: ComponentFixture<BeneficesfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficesfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficesfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
