
import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/shared-model/task.model';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  @Input()
  task:Task = new Task();

  constructor() { }

  ngOnInit(): void {
  }
  show(){
    console.log(this.task);
  }
}
