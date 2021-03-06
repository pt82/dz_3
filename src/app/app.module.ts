import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { HttpClientModule } from '@angular/common/http';
import { ListTaskComponent } from './list-task/list-task.component';
import { VievTaskComponent } from './viev-task/viev-task.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
   declarations: [
      AppComponent,
      ListProductsComponent,
      ViewProductsComponent,
      ListTaskComponent,
      VievTaskComponent,
      ListCategoryComponent,
      CategoryComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
