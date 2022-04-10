import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerestorateurComponent } from './listerestorateur.component';

describe('ListerestorateurComponent', () => {
  let component: ListerestorateurComponent;
  let fixture: ComponentFixture<ListerestorateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerestorateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerestorateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
