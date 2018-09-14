import { TestBed, inject } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { TaskdetailService } from './taskdetail.service';
import { Task } from 'src/app/Models/task';
import { MockTaskList } from 'src/app/Models/mock-task-list';

describe('TaskdetailService', () => {
  let httpClient: HttpClient;
  let httpTestingController:HttpTestingController;
  let taskMangerService: TaskdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskdetailService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    httpClient = TestBed.get(HttpClient);
    taskMangerService = TestBed.get(TaskdetailService);

  });

  afterEach(() => {
    httpTestingController.verify()
  });

  describe(('#getTaskList'), () => {
    let expectedTasks: Task[];

    beforeEach(() => {
      taskMangerService = TestBed.get(TaskdetailService);
      expectedTasks = MockTaskList;
    });

    it('Should be geting the list of all tasks', () =>{
      taskMangerService.getTaskList().subscribe(
        taskList => expect(taskList).toEqual(expectedTasks,'should return the expected list of tasks'), fail
      );

      const req = httpTestingController.expectOne(taskMangerService.baseUrl + '/GetAll');
      expect(req.request.method).toEqual('GET');

      req.flush(expectedTasks);
    });

    it('should be geting the single task', ()=> {
      const taskId: number = 1;
      let expectedTask = MockTaskList[taskId - 1];
      
      taskMangerService.getTaskById(taskId).subscribe(
        task => expect(task).toEqual(expectedTask, 'should return expected task'), fail
      );

      const req = httpTestingController.expectOne(taskMangerService.baseUrl + '/Get/' + taskId );
      expect(req.request.method).toEqual('GET');

      req.flush(expectedTask);

    });

  });


});
