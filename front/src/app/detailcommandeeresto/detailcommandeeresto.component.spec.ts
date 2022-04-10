import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcommandeerestoComponent } from './detailcommandeeresto.component';

describe('DetailcommandeerestoComponent', () => {
  let component: DetailcommandeerestoComponent;
  let fixture: ComponentFixture<DetailcommandeerestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcommandeerestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcommandeerestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
