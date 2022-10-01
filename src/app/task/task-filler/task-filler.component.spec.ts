import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFillerComponent } from './task-filler.component';

describe('TaskFillerComponent', () => {
  let component: TaskFillerComponent;
  let fixture: ComponentFixture<TaskFillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskFillerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskFillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
