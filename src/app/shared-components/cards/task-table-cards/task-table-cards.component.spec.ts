import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTableCardsComponent } from './task-table-cards.component';

describe('TaskTableCardsComponent', () => {
  let component: TaskTableCardsComponent;
  let fixture: ComponentFixture<TaskTableCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskTableCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTableCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
