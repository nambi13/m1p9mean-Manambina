import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutrestoComponent } from './ajoutresto.component';

describe('AjoutrestoComponent', () => {
  let component: AjoutrestoComponent;
  let fixture: ComponentFixture<AjoutrestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutrestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
