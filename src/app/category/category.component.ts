import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

type Category = {
  title: string,
  desc: string
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(

    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  cat: Category = {
    title: '',
    desc: ''
   }

  ngOnInit() {
    this.http.get("http://lesson-3.iilinov-n.myjino.ru/api/category/" + this.route.snapshot.paramMap.get('id'))
    .subscribe( (cat: Category) => {
      this.cat = cat;
    } )

  }

}
