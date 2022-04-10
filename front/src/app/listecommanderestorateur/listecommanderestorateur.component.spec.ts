import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecommanderestorateurComponent } from './listecommanderestorateur.component';

describe('ListecommanderestorateurComponent', () => {
  let component: ListecommanderestorateurComponent;
  let fixture: ComponentFixture<ListecommanderestorateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecommanderestorateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecommanderestorateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
