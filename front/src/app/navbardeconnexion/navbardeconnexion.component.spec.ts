import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbardeconnexionComponent } from './navbardeconnexion.component';

describe('NavbardeconnexionComponent', () => {
  let component: NavbardeconnexionComponent;
  let fixture: ComponentFixture<NavbardeconnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbardeconnexionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbardeconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
