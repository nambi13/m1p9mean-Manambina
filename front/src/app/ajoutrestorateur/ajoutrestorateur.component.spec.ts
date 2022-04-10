import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutrestorateurComponent } from './ajoutrestorateur.component';

describe('AjoutrestorateurComponent', () => {
  let component: AjoutrestorateurComponent;
  let fixture: ComponentFixture<AjoutrestorateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutrestorateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutrestorateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
