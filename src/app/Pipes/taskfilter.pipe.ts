import { Pipe, PipeTransform } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Pipe({
  name: 'taskfilter'
})

export class TaskFilterPipe implements PipeTransform {
  transform(items: any, filter: any, PriorityFrom: number, PriorityTo: number): any[] {
    if (filter && Array.isArray(items)) {

      let filterKeys = Object.keys(filter);
       console.log(filter);
      var filteredTasks = items.filter(item =>
        filterKeys.reduce((task, keyName) =>
          (task &&
            ((keyName === 'StartDt' || keyName === 'EndDt') ?
              new RegExp(filter[keyName], 'gi').test(this.getDateStr(new Date(item[keyName]))) :
              new RegExp(filter[keyName], 'gi').test(item[keyName]))) || filter[keyName] === "", true));

      if (!isNaN(PriorityFrom) && PriorityFrom && !isNaN(PriorityTo) && PriorityTo) {
        return filteredTasks.filter(task =>
          task.Priority >= PriorityFrom && task.Priority <= PriorityTo);
      } else if (PriorityFrom && !isNaN(PriorityFrom)) {
        return filteredTasks.filter(task =>
          task.Priority >= PriorityFrom);
      } else if (PriorityTo && !isNaN(PriorityTo)) {
        return filteredTasks.filter(task =>
          task.Priority <= PriorityTo);
      }

      // console.log(FilterStartDate.getDay() + 'FilterStartDate');
      // console.log(filteredTasks);

      //       if (FilterStartDate && FilterEndDate){
      //         return filteredTasks.filter(task=> 
      //           this.getDate(task.StartDt) >= FilterStartDate && task.EndDt <= FilterEndDate);
      //       } else if (FilterStartDate){
      //         return filteredTasks.filter(task=>
      //           this.getDate(task.StartDt) >= FilterStartDate);
      //       } else if (FilterEndDate){
      //         return filteredTasks.filter(task =>
      //         task.EndDt <= FilterEndDate);
      //       }

      return filteredTasks;

    } else {
      return items;
    }
  }

  private getDateStr(date: Date): string {
    var dt = new Date(date);
    // console.log(this.pad(date.getMonth() + 1) + '/' + this.pad(date.getDate()) + '/' + date.getFullYear());
     return (this.pad(date.getMonth() + 1) + '/' + this.pad(date.getDate()) + '/' + date.getFullYear());
  }

  private pad(s: number): string {
    return (s < 10) ? '0' + s.toString() : s.toString();
  }

  // private getDate(date: Date) {
  //   var dt = new Date(date);

  //   console.log(dt + 'GetDAte Print1');

  //   let splitStartDt = new Date(date).toLocaleDateString().split("/", 3);

  //   let apiYear = Number(splitStartDt[2]);
  //   let apiMonth = Number(splitStartDt[0]);
  //   let apiDay = Number(splitStartDt[1]);

  //   let dateForDP = {
  //     year: apiYear,
  //     month: apiMonth,
  //     day: apiDay
  //   };
  //   console.log(dateForDP + 'dateForDP');
  //   return dt;
  // }

  
}