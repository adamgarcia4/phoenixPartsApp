import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartListViewComponent } from './part-list-view.component';

describe('PartListViewComponent', () => {
  let component: PartListViewComponent;
  let fixture: ComponentFixture<PartListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
