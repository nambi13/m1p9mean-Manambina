import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifrestorateurComponent } from './modifrestorateur.component';

describe('ModifrestorateurComponent', () => {
  let component: ModifrestorateurComponent;
  let fixture: ComponentFixture<ModifrestorateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifrestorateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifrestorateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
