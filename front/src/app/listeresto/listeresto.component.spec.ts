import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerestoComponent } from './listeresto.component';

describe('ListerestoComponent', () => {
  let component: ListerestoComponent;
  let fixture: ComponentFixture<ListerestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
