import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarestorateurComponent } from './navbarestorateur.component';

describe('NavbarestorateurComponent', () => {
  let component: NavbarestorateurComponent;
  let fixture: ComponentFixture<NavbarestorateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarestorateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarestorateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
