import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { TaskdetailService } from 'src/app/Services/taskdetail.service';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './UI/add-task/add-task.component';
import { ViewTaskComponent } from './UI/view-task/view-task.component';
import { EditTaskComponent } from './UI/edit-task/edit-task.component';
import { AppRoutingModule }  from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { TaskFilterPipe } from './Pipes/taskfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    EditTaskComponent,
    ViewTaskComponent,
    TaskFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [TaskdetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
