import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YurtDetailComponent } from './yurt-detail.component';

describe('YurtDetailComponent', () => {
  let component: YurtDetailComponent;
  let fixture: ComponentFixture<YurtDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YurtDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YurtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
