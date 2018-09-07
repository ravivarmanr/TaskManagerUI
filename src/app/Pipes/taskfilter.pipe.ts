import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskfilter'
})

export class TaskFilterPipe implements PipeTransform {
  transform(items: any, filter: any, PriorityFrom: number, PriorityTo: number): any[] {
    if (filter && Array.isArray(items)) {

      let filterKeys = Object.keys(filter);

      var filteredTasks = items.filter(item =>
        filterKeys.reduce((task, keyName) =>
              (task && 
                ((keyName === 'StartDt' || keyName === 'EndDt') ?
                new RegExp(filter[keyName], 'gi').test(this.getDateStr(new Date(item[keyName]))) :
              new RegExp(filter[keyName], 'gi').test(item[keyName]))) || filter[keyName] === "", true));

if (!isNaN(PriorityFrom) && PriorityFrom && !isNaN(PriorityTo) && PriorityTo){
  return filteredTasks.filter(task =>
    task.Priority >= PriorityFrom && task.Priority <= PriorityTo);
} else if (PriorityFrom && !isNaN(PriorityFrom)){
  return filteredTasks.filter(task =>
    task.Priority >= PriorityFrom);
} else if (PriorityTo && !isNaN(PriorityTo)){
  return filteredTasks.filter(task =>
    task.Priority >= PriorityTo && task.Priority <= PriorityTo);
}

return filteredTasks;
  
    } else {
      return items;
    }
  }

  private getDateStr(date:Date): string {
    var dt = new Date(date);
    return (this.pad(date.getMonth()+1)) + '/' + this.pad(date.getDate()) + '/' + date.getFullYear();
  }

  private pad(s:number): string{
    return (s< 10)? '0' + s.toString() : s.toString();
  }

}