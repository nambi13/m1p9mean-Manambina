import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailplatcommanderComponent } from './detailplatcommander.component';

describe('DetailplatcommanderComponent', () => {
  let component: DetailplatcommanderComponent;
  let fixture: ComponentFixture<DetailplatcommanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailplatcommanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailplatcommanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
