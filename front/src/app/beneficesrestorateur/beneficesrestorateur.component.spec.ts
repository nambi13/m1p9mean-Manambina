import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficesrestorateurComponent } from './beneficesrestorateur.component';

describe('BeneficesrestorateurComponent', () => {
  let component: BeneficesrestorateurComponent;
  let fixture: ComponentFixture<BeneficesrestorateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficesrestorateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficesrestorateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
