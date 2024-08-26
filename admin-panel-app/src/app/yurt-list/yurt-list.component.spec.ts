import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YurtListComponent } from './yurt-list.component';

describe('YurtListComponent', () => {
  let component: YurtListComponent;
  let fixture: ComponentFixture<YurtListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YurtListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YurtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
