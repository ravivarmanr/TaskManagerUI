import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskdetailService } from 'src/app/Services/taskdetail.service';
import { Task } from 'src/app/Models/task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})

export class ViewTaskComponent implements OnInit {

  Tasks: Task[];

  viewTask: FormGroup;

  FilterTask: string;
  FilterParentTask: string;
  FilterPriorityFrom: number;
  FilterPriorityTo: number;
  FilterStartDate: string;
  FilterEndDate: string;
  
  constructor(private taskDetailService: TaskdetailService, private router: Router, private formBuilder:FormBuilder) { }


  ngOnInit() {
    this.loadTaskDetails();

  }

  loadTaskDetails(): void {
    this.taskDetailService.getTaskList()
    .subscribe( data => { 
      this.Tasks = data;
    });
  }

  endTask(task: Task): void {
    this.taskDetailService.endTask(task.TaskId)
      .subscribe( data => {
        this.loadTaskDetails();
      });
    alert('Task ended!!!'+ task.TaskId);
  }

  deleteTask(task: Task): void {
    // this.taskDetailService.endTask(task.TaskId)
    //   .subscribe( data => {
    //     this.loadTaskDetails();
    //   });
    alert('Task will be deleted!!!'+ task.TaskId);
  }

}
