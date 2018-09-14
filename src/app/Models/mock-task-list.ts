import { Task } from "src/app/Models/task";

export const MockTaskList: Task[] = [
{
    
    TaskId: 1,
    TaskName: 'Create Test Case',
    ParentTaskId: 0,
    Priority: 1,
    StartDt: new Date,
    EndDt:new Date,
    TaskStatus: 'Y',
    ParentTaskName: 'Task Manager'
},
{
     
    TaskId: 2,
    TaskName: 'Create Test plan',
    ParentTaskId: 1,
    Priority: 2,
    StartDt: new Date,
    EndDt:new Date,
    TaskStatus: 'Y',
    ParentTaskName: 'Create Test Case'
},
{
     
    TaskId: 3,
    TaskName: 'Create Test execution',
    ParentTaskId: 2,
    Priority: 2,
    StartDt: new Date,
    EndDt:new Date,
    TaskStatus: 'N',
    ParentTaskName: 'Create Test plan'
}
]