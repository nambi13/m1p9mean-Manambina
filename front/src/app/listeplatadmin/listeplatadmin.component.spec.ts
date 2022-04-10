import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeplatadminComponent } from './listeplatadmin.component';

describe('ListeplatadminComponent', () => {
  let component: ListeplatadminComponent;
  let fixture: ComponentFixture<ListeplatadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeplatadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeplatadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
