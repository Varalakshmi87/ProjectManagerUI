import { Injectable } from '@angular/core';
import {observable,of, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';
import {Project} from './Project';


const httpOptions = {
  headers: new HttpHeaders({'content-Type':'application/json'})
  };


@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  private ProjectUrl = 'http://localhost/ProjectManagerAPI/api/Project';
  private ProjectByProjectidUrl = 'http://localhost/ProjectManagerAPI/api/Project/';
  private CreateProjectUrl = 'http://localhost/ProjectManagerAPI/api/Project';
  private DeleteProjectUrl = 'http://localhost/ProjectManagerAPI/api/Project/';
  private UpdateProjectUrl = 'http://localhost/ProjectManagerAPI/api/Project/';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation',result?:T){
    return (error:any): Observable<T>=>{
      console.error(error);
      console.log('${operation} failed:${error.message}');
      return of(result as T);
    };
  }

  getprojects():Observable<Project[]>{
        console.log('Invoking GetProject................');
    return this.http.get<Project[]>(this.ProjectUrl).pipe(
      catchError(this.handleError('getProject',[]))
    );
  }

  addprojects(project: Project):Observable<any>{
    console.log('Invoking AddProject................');
   return this.http.post<boolean>(this.CreateProjectUrl,project).pipe(
  catchError(this.handleError('addProject',[]))
  );
}
updateprojects(project: Project,project_id:number):Observable<any>{
  console.log('Invoking UpdateProject................');
 return this.http.put<boolean>(this.UpdateProjectUrl + project_id,project).pipe(
catchError(this.handleError('UpdateProject',[]))
);
}

}
