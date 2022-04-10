import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifrestoComponent } from './modifresto.component';

describe('ModifrestoComponent', () => {
  let component: ModifrestoComponent;
  let fixture: ComponentFixture<ModifrestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifrestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifrestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
