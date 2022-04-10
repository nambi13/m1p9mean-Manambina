import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelivreurComponent } from './listelivreur.component';

describe('ListelivreurComponent', () => {
  let component: ListelivreurComponent;
  let fixture: ComponentFixture<ListelivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListelivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListelivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
