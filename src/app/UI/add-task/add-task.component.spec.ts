import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTaskComponent } from './add-task.component';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, NgForm, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { TaskdetailService } from 'src/app/Services/taskdetail.service';



describe('AddTaskComponent', () => {
  
  class mockRouter { navigate = jasmine.createSpy("navigate")};
  class MockActivateRoute { navigate = jasmine.createSpy()};
  let mockTaskDetailService = jasmine.createSpyObj(['getTaskById', 'getTaskList']);

  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTaskComponent ],
      imports: [ReactiveFormsModule,FormsModule,NgbDatepickerModule],
      schemas:[NO_ERRORS_SCHEMA],
      providers:[
        {provide: Router, useClass: mockRouter},
        {provide: TaskdetailService, useValue: mockTaskDetailService}
      ]
    })
    // .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create the add task component', () => {
    expect(component).toBeTruthy();
  });
});
