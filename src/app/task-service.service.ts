import { Injectable } from '@angular/core';
import {observable,of, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';
import {Task, ParentTask} from './Task';

const httpOptions = {
  headers: new HttpHeaders({'content-Type':'application/json'})
  };

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  testData:Task[]

  private taskUrl = 'http://localhost/ProjectManagerAPI/api/task/getAll';
  private taskbyIdUrl = 'http://localhost/ProjectManagerAPI/task/get/';
  private taskCreateUrl = 'http://localhost/ProjectManagerAPI/task/create';
  private taskendUrl = 'http://localhost/ProjectManagerAPI/task/end/';
  private taskUpdateUrl = 'http://localhost/ProjectManagerAPI/task/update/';
  private parenttaskUrl = 'http://localhost/ProjectManagerAPI/task/getParents';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation',result?:T){
    return (error:any): Observable<T>=>{
      console.error(error);
      console.log('${operation} failed:${error.message}');
      return of(result as T);
    };
  }

  
  getParents():Observable<ParentTask[]>{
   return this.http.get<ParentTask[]>(this.parenttaskUrl);
}


getTasks():Observable<Task[]>{
  console.log('Invoking Gettask................');
return this.http.get<Task[]>(this.taskUrl).pipe(
catchError(this.handleError('getTask',[]))
);
}


getTaskbyID(task_id: number):Observable<Task[]>{
  console.log('Invoking Gettaskbyid................');
return this.http.get<Task[]>(this.taskbyIdUrl + task_id);
}



endTaskbyID(task_id: number):Observable<any>{
  console.log('Invoking endtaskbyid................'+task_id);
return this.http.get(this.taskendUrl + task_id);
}

updateTaskbyID(task:Task,task_id: number):Observable<any>{
  console.log('Invoking updatetask................' +  task);  
return this.http.post(this.taskUpdateUrl + task_id,task);
}


addTaskby(task:Task):Observable<any>{
  console.log('Invoking createtask................' +  task);
  return this.http.post(this.taskCreateUrl,task);
}

}
