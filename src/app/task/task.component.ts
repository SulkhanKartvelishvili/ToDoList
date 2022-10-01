import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Task } from '../shared-model/task.model';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  faCheck = faCheck;
  faTrash=faTrash;
  faSpinner=faSpinner;

  task:Task = new Task();
tasksList:Task[]=[];


 sunday:Task[]=[];
monday:Task[]=[];
tuesday:Task[]=[];
wednesday:Task[]=[];
thursday:Task[]=[];
 friday:Task[]=[];
saturday:Task[]=[];







  constructor() { }

  ngOnInit(): void {
  }
  onTaskSaveSubs(task:Task){
  //  this.tasksList.push(task);
  // this.TaskArraysEmitter.emit(this.task);
  
  if(task.day=="sunday"){
    this.sunday.push(task);
  
  }

  else  if(task.day=="monday"){
    this.monday.push(task);
  }
  else  if(task.day=="tuesday"){
    this.tuesday.push(task);
  }
  else  if(task.day=="wednesday"){
    this.wednesday.push(task);
  }
  else  if(task.day=="thursday"){
    this.thursday.push(task);
  }
  else  if(task.day=="friday"){
    this.friday.push(task);

  }
  else  if(task.day=="saturday"){
    this.saturday.push(task);
    console.log(this.saturday);
  }
 


 

  }

  changeStatusToDone( id:string){
   this.sunday.forEach(item  => {
      if(item.id==id){
        item.type=3;
        
      }
   })
   this.monday.forEach(item  => {
    if(item.id==id){
      item.type=3;
      
    }
 })
 this.tuesday.forEach(item  => {
  if(item.id==id){
    item.type=3;
    
  }
})
this.wednesday.forEach(item  => {
  if(item.id==id){
    item.type=3;
    
  }
})
this.thursday.forEach(item  => {
  if(item.id==id){
    item.type=3;
    
  }
})
this.friday.forEach(item  => {
  if(item.id==id){
    item.type=3;
    
  }
})
this.saturday.forEach(item  => {
  if(item.id==id){
    item.type=3;
    
  }
})
  }
  changeStatusToInProgress( id:string){
    this.sunday.forEach(item  => {
      if(item.id==id){
        item.type=2;
        
      }
   })
   this.monday.forEach(item  => {
    if(item.id==id){
      item.type=2;
      
    }
 })
 this.tuesday.forEach(item  => {
  if(item.id==id){
    item.type=2;
    
  }
})
this.wednesday.forEach(item  => {
  if(item.id==id){
    item.type=2;
    
  }
})
this.thursday.forEach(item  => {
  if(item.id==id){
    item.type=2;
    
  }
})
this.friday.forEach(item  => {
  if(item.id==id){
    item.type=2;
    
  }
})
this.saturday.forEach(item  => {
  if(item.id==id){
    item.type=2;
    
  }
})
  }
  deleteTask(i:number, id:string){
    this.sunday.forEach(item  => {
      if(item.id==id){
        this.sunday.splice(i, 1);
        
      }
   })
   this.monday.forEach(item  => {
    if(item.id==id){
      this.monday.splice(i, 1);
      
    }
 })
 this.tuesday.forEach(item  => {
  if(item.id==id){
    this.tuesday.splice(i, 1);
    
  }
})
this.wednesday.forEach(item  => {
  if(item.id==id){
    this.wednesday.splice(i, 1);
    
  }
})
this.thursday.forEach(item  => {
  if(item.id==id){
    this.thursday.splice(i, 1);
    
  }
})
this.friday.forEach(item  => {
  if(item.id==id){
    this.friday.splice(i, 1);
    
  }
})
this.saturday.forEach(item  => {
  if(item.id==id){
    this.saturday.splice(i, 1);
    
  }
})
  }


  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
 
}
