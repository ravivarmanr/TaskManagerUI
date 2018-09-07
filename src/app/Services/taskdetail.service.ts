import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions, RequestMethod  } from '@angular/http';
import { HttpClient } from '@angular/common/http'
import {environment} from '../../environments/environment'
  // import { Observable, of } from 'rxjs';

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/promise';

import { Task } from '../Models/task'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class TaskdetailService {

  selectedTask : Task;
  task : Task;
  taskList : Task[];
   
  constructor(private http : HttpClient) { }

  baseUrl: string = environment.apiUrl;
  
  getTaskList(){
    return this.http.get<Task[]>(this.baseUrl + '/GetAll');
  }

  createTask(task: Task) {
    console.log(task);
    return this.http.post(this.baseUrl + '/Add', task);
  }

  
  getTaskById(id): Observable<Task> {
    return this.http.get<Task>(this.baseUrl+'/Get/'+id);
  }

  updateTaskDetail(task: Task) {
    console.log(task);
    return this.http.put(this.baseUrl+'/Update', task);
  }

  endTask(id): Observable<Task> {
    console.log(id);
    return this.http.get<Task>(this.baseUrl+'/End/'+id);
  }

  

}
