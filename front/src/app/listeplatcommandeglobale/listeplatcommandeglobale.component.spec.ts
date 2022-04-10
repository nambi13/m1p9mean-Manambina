import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeplatcommandeglobaleComponent } from './listeplatcommandeglobale.component';

describe('ListeplatcommandeglobaleComponent', () => {
  let component: ListeplatcommandeglobaleComponent;
  let fixture: ComponentFixture<ListeplatcommandeglobaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeplatcommandeglobaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeplatcommandeglobaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
