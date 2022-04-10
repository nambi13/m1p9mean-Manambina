import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeplatalivrerComponent } from './listeplatalivrer.component';

describe('ListeplatalivrerComponent', () => {
  let component: ListeplatalivrerComponent;
  let fixture: ComponentFixture<ListeplatalivrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeplatalivrerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeplatalivrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
