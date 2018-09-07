import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './UI/add-task/add-task.component';
import { ViewTaskComponent } from './UI/view-task/view-task.component';
import { EditTaskComponent } from './UI/edit-task/edit-task.component';


const routes: Routes = [
  {path: '', redirectTo:'view-task', pathMatch:'full' },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'edit-task/:taskid', component: EditTaskComponent },
  { path: 'view-task', component: ViewTaskComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }



