import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  testStuff: string = 'Hello, this is a test';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
tasks: Task[] = [
new Task("Finish weekend Angular homework for Epicodus course", 1),
new Task("Start tomorrows homework for Epicodus course", 2),
new Task("Already done", 3),
new Task("Done", 4),
new Task("Finish for the week", 5)
]
 // firstTask = {
 //    description: "Finish weekend Angular homework for Epicodus course",
 //    amountLeft: 5
 //  }
}
