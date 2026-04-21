import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
@Injectable({
  providedIn: 'root',
})

export class UserService {


  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8080/taskplanner';

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl+'/users');
  }
  addUser(user: User):Observable<User>{
    return this.http.post<User>(this.apiUrl+'/addUser',user)
  }
}
