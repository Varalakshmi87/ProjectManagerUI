import { Injectable } from '@angular/core';
import {observable,of, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';
import {User} from './User';


const httpOptions = {
  headers: new HttpHeaders({'content-Type':'application/json'})
  };

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private UserUrl = 'http://localhost/ProjectManagerAPI/api/User';
  private UserByUseridUrl = 'http://localhost/ProjectManagerAPI/api/User/';
  private CreateUserUrl = 'http://localhost/ProjectManagerAPI/api/User';
  private DeleteUserUrl = 'http://localhost/ProjectManagerAPI/api/User/';
  private UpdateUserUrl = 'http://localhost/ProjectManagerAPI/api/User/';

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation',result?:T){
    return (error:any): Observable<T>=>{
      console.error(error);
      console.log('${operation} failed:${error.message}');
      return of(result as T);
    };
  }

  getUsers():Observable<User[]>{
    console.log('Invoking GetUser................');
return this.http.get<User[]>(this.UserUrl).pipe(
  catchError(this.handleError('getProject',[]))
);
}

addUsers(user: User):Observable<any>{
console.log('Invoking AddUser................');
return this.http.post<boolean>(this.CreateUserUrl,User).pipe(
catchError(this.handleError('addUser',[]))
);
}
updateUsers(user: User,user_id:number):Observable<any>{
console.log('Invoking UpdateUser................');
return this.http.put<boolean>(this.UpdateUserUrl + user_id,User).pipe(
catchError(this.handleError('UpdateUser',[]))
);
}

deleteUsers(user_id:number):Observable<any>{
  console.log('Invoking DeleteUser................');
  return this.http.delete<boolean>(this.DeleteUserUrl + user_id).pipe(
  catchError(this.handleError('DeleteUser',[]))
  );
  }
}
