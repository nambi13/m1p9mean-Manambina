import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarlivreurComponent } from './navbarlivreur.component';

describe('NavbarlivreurComponent', () => {
  let component: NavbarlivreurComponent;
  let fixture: ComponentFixture<NavbarlivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarlivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarlivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
