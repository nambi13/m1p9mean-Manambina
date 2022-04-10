import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillivreurComponent } from './detaillivreur.component';

describe('DetaillivreurComponent', () => {
  let component: DetaillivreurComponent;
  let fixture: ComponentFixture<DetaillivreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillivreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
