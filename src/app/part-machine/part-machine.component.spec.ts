import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartMachineComponent } from './part-machine.component';

describe('PartMachineComponent', () => {
  let component: PartMachineComponent;
  let fixture: ComponentFixture<PartMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
