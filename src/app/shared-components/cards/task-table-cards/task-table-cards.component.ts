import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/shared-model/task.model';

@Component({
  selector: 'app-task-table-cards',
  templateUrl: './task-table-cards.component.html',
  styleUrls: ['./task-table-cards.component.css']
})
export class TaskTableCardsComponent implements OnInit {
  @Input()
  task:Task = new Task();

  constructor() { }

  ngOnInit(): void {
  }

}
