import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

type Task = {
  title: string,
  desc: string,
  hour: string,
  minutes: string,
  created_at: string
  
}

@Component({
  selector: 'app-viev-task',
  templateUrl: './viev-task.component.html',
  styleUrls: ['./viev-task.component.css']
})
export class VievTaskComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  task: Task = {
    title: '',
    desc: '',
    hour: '',
  minutes: '',
  created_at: '',
   }

  ngOnInit() {
    this.http.get("http://iilinov-n.myjino.ru/tasks/" + this.route.snapshot.paramMap.get('id'))
      .subscribe( (task: Task) => { 
        this.task = task;
      } )
  }

}
