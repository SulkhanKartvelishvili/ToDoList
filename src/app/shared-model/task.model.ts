import { Time } from "@angular/common";

export class Task{
    public id!:string;
    public name!:string;
    public    day!:string;
    public  stime!:Time;
    public  etime!:Time;
    public type!:TaskType;

    constructor(){
       
        this.type = TaskType.ToDo;
    }
}
export enum TaskType {
    ToDo=1,
    InProgress=2,
    Done=3
};