import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class TaskService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8080/taskplanner';

  getTasks(): any{
    return this.http.get(this.apiUrl+'/users');
  }
  addUser(user: any){
    return this.http.post(this.apiUrl+'/addUser',user)
  }
}
