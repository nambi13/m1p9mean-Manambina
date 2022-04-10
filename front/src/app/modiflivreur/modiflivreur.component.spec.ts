import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiflivreurComponent } from './modiflivreur.component';

describe('ModiflivreurComponent', () => {
  let component: ModiflivreurComponent;
  let fixture: ComponentFixture<ModiflivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiflivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiflivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
