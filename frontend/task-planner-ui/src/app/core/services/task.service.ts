import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../../models/task.model';
@Injectable({
  providedIn: 'root',
})

export class TaskService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8080/taskplanner';

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl+'/tasks');
  }
  createTask(task: Task): Observable<Task[]>{
    return this.http.post<Task[]>(this.apiUrl+'/createTask',task)
  }
  toggleTaskCompletion(id: number): Observable<Task>{
    return this.http.put<Task>(this.apiUrl+"/"+id+"/complete",{});
  }

  deleteTask(id:number){
    return this.http.delete(this.apiUrl+"/"+id+"/delete")
  }
}