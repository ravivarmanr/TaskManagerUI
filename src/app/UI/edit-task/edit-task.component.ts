import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { TaskdetailService } from 'src/app/Services/taskdetail.service'
import { Task } from '../../Models/task';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  taskId: any;
  editTask: FormGroup;
  parentTasks:Task[];

  constructor(private route: ActivatedRoute, private taskDetailService: TaskdetailService,private formBuilder:FormBuilder, private router: Router) {
    this.route.params.subscribe(params => this.taskId = params.taskid);
        this.editTask;
    
  }

  ngOnInit() {
    this.getTaskList();
    this.editTask = this.formBuilder.group({
      TaskId: [''],
      TaskName: ['', Validators.required],
      ParentTaskId: [''],
      Priority: ['', { validators: [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(8)] }],
      StartDt: ['', Validators.required],
      EndDt: ['', Validators.required],
      TaskStatus: ['']
    });


    this.taskDetailService.getTaskById(this.taskId).subscribe(
      (result) => {
        console.log(result);
        this.editTask.patchValue({
          TaskId: result.TaskId,
          TaskName: result.TaskName,
          ParentTaskId: result.ParentTaskId,
          Priority: result.Priority,
          StartDt: result.StartDt,
          EndDt: result.EndDt,
          TaskStatus: result.TaskStatus
        })

      } 
    )
  }


  onSubmit() {
    console.log(this.editTask.value);
    this.editTask.value.TaskStatus = 'Y';
    // this.editTask.value.TaskId = 'Y';
    console.log(this.editTask.value);
    this.taskDetailService.updateTaskDetail(this.editTask.value)
      .subscribe( data => {
        this.router.navigate(['view-task']);
      });
  }

  cancel(){
    this.router.navigate(['view-task']);
  }

 // convenience getter for easy access to form fields
 get formfields() { return this.editTask.controls; }

 getTaskList(){
  this.taskDetailService.getTaskList()
  .subscribe( data => {
    this.parentTasks=data;
  });
}
}
