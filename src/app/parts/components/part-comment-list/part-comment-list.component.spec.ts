import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCommentListComponent } from './part-comment-list.component';

describe('PartCommentListComponent', () => {
  let component: PartCommentListComponent;
  let fixture: ComponentFixture<PartCommentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartCommentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartCommentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
