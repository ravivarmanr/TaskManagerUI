import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTaskComponent } from './edit-task.component';
import { FormBuilder, NgForm, FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskdetailService } from 'src/app/Services/taskdetail.service';
import { Observable } from 'rxjs/internal/Observable';



describe('EditTaskComponent', () => {

  class mockRouter { navigate = jasmine.createSpy("navigate")};
  class mockActivateRoute { navigate = jasmine.createSpy()};
  let mockTaskDetailService = jasmine.createSpyObj(['getTaskById', 'getTaskList']);

  let component: EditTaskComponent;
  let fixture: ComponentFixture<EditTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTaskComponent ],
      imports: [ReactiveFormsModule,FormsModule,NgbDatepickerModule],
      schemas:[NO_ERRORS_SCHEMA],
      providers:[
        {provide: Router, useClass: mockRouter},
        {provide: TaskdetailService, useValue: mockTaskDetailService},
        {provide: ActivatedRoute, useClass:mockActivateRoute}
        // {provide: ActivatedRoute, useValue: {'params':Observable.from([{'taskId':1}])}}
              
      ]
    })
    // .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create the edit task component', () => {
    expect(component).toBeTruthy();
  });
});
