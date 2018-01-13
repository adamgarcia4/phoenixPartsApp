import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCommentComponent } from './part-comment.component';

describe('PartCommentComponent', () => {
  let component: PartCommentComponent;
  let fixture: ComponentFixture<PartCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
