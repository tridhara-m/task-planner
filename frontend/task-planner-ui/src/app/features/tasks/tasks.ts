import { Component } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { UserService } from '../../core/services/user.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.model';
import { Task } from '../../models/task.model';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css'],
})
export class Tasks implements OnInit {
  users: User[] = [];
  tasks: Task[] = [];
  newUserName: string = '';
  constructor(private taskService: TaskService,
    private userService: UserService
  ) { }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });

    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
      console.log('Task Data received from API:', data);
      console.log('Tasks:', this.tasks);
    });
  }
  addUser(user: User) {
    const newUser = {
      name: this.newUserName
    };
    this.userService.addUser(user).subscribe((response: User) => {
      this.users.push(response);
      this.newUserName = '';
    })
  }
  toggleTaskCompletion(task: Task) {
    if (!task.id) return;
    this.taskService.toggleTaskCompletion(task.id).subscribe(updatedTask => {
      task.completed = updatedTask.completed;
    });
  }

  deleteTask(task: Task){
    if(!task.id) return;
    this.taskService.deleteTask(task.id).subscribe(() => {
      this.tasks = this.tasks.filter(t=> t.id !==task.id);
    })
  }
}
