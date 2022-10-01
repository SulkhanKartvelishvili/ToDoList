import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Task } from '../../shared-model/task.model';

@Component({
  selector: 'app-task-filler',
  templateUrl: './task-filler.component.html',
  styleUrls: ['./task-filler.component.css']
})
export class TaskFillerComponent implements OnInit {

task:Task = new Task();


@Output()
onTaskSaveEmitter:EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  addTask(){
   var randomID = Math.random().toString(36).substring(2)
   this.task.id=randomID;
    this.onTaskSaveEmitter.emit(this.task);
    
    this.task = new Task();
    }

}
