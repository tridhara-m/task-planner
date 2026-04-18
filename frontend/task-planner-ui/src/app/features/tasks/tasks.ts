import { Component } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css'],
})
export class Tasks implements OnInit {
  users: any[] = [];
  newUserName: string = '';
  constructor(private taskService: TaskService
  ) { }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data: any) => {
      this.users = data;
      console.log('Data received from API:', data);
      console.log('Users:', this.users);
    });
  }
  addUser() {
    const newUser = {
      name: this.newUserName
    };
    this.taskService.addUser(newUser).subscribe((response:any)=>{
      this.users.push(response);
      this.newUserName = '';
    })
  }
}
