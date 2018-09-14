import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTaskComponent } from './view-task.component';
import { FormBuilder, NgForm, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TaskdetailService } from 'src/app/Services/taskdetail.service';
import { TaskFilterPipe } from 'src/app/Pipes/taskfilter.pipe';
import { APP_BASE_HREF } from '@angular/common';

describe('ViewTaskComponent', () => {

  class mockRouter { navigate = jasmine.createSpy("navigate")};
  class MockActivateRoute { navigate = jasmine.createSpy()};
  let mockTaskDetailService = jasmine.createSpy('getTaskList');

  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTaskComponent, TaskFilterPipe ],
      imports: [FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers:[
         {provide: Router, useclass:mockRouter },
         {provide: TaskdetailService, useValue: mockTaskDetailService },
         {provide: APP_BASE_HREF, useValue: '/'}
       ]
    })
    // .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create component instance of View Tasks', () => {
    expect(component).toBeTruthy();
  });
});
