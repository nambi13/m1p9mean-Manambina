import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarerestoComponent } from './navbareresto.component';

describe('NavbarerestoComponent', () => {
  let component: NavbarerestoComponent;
  let fixture: ComponentFixture<NavbarerestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarerestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarerestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
