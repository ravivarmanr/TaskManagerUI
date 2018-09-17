import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskdetailService } from 'src/app/Services/taskdetail.service'
import { Task } from '../../Models/task';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private taskDetailService: TaskdetailService,private parserFormatter: NgbDateParserFormatter) { }

 // addtask = 'Add Task';
  parentTasks:Task[];
  addTask: FormGroup;

  ngOnInit() {
    this.getTaskList();
    this.addTask = this.formBuilder.group({
      TaskName: ['', Validators.required],
      ParentTaskId: [''],
      Priority: ['', { validators: [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(8)] }],
      StartDt: ['', Validators.required],
      EndDt: ['', Validators.required],
    });
  }
   
get Priority() { return this.addTask.get('Priority'); }

  onSubmit() {
    this.addTask.value.TaskStatus = 'Y';
    
   this.addTask.value.StartDt=this.parserFormatter.format(this.addTask.value.StartDt);
   this.addTask.value.EndDt=this.parserFormatter.format(this.addTask.value.EndDt);
  //this.addTask.value.StartDt="9/5/2018";
    this.taskDetailService.createTask(this.addTask.value)
      .subscribe( data => {
        this.router.navigate(['view-task']);
      });
  }

  cancel(){
    this.router.navigate(['view-task']);
  }

  // convenience getter for easy access to form fields
  get formfields() { return this.addTask.controls; }

  getTaskList(){
    this.taskDetailService.getTaskList()
    .subscribe( data => {
      this.parentTasks=data;
    });
  }
}
