import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  constructor(
    private http: HttpClient,
  ) {  }

  category = []

  ngOnInit() {
    this.http.get("http://lesson-3.iilinov-n.myjino.ru/api/category")
      .subscribe( (category: any[]) => {
        this.category = category

      });
  }


}
