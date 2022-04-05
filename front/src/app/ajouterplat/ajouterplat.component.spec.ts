import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterplatComponent } from './ajouterplat.component';

describe('AjouterplatComponent', () => {
  let component: AjouterplatComponent;
  let fixture: ComponentFixture<AjouterplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterplatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
