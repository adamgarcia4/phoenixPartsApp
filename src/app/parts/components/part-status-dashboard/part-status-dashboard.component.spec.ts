import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartStatusDashboardComponent } from './part-status-dashboard.component';

describe('PartStatusDashboardComponent', () => {
  let component: PartStatusDashboardComponent;
  let fixture: ComponentFixture<PartStatusDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartStatusDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartStatusDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
