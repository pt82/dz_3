import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {


  constructor(
    private http: HttpClient,
  ) { }

 tasks = []

  ngOnInit() {
    this.http.get("http://iilinov-n.myjino.ru/tasks")
      .subscribe( (tasks: any[]) => {
        this.tasks = tasks 
      });
  }

}
