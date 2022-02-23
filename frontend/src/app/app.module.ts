import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/news/view/view.component';
import { ListAllComponent } from './components/news/list-all/list-all.component';
import { FormComponent } from './components/news/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { CommentComponent } from './components/news/comment/comment.component';
import { CardListComponent } from './components/card-list/card-list.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    ListAllComponent,
    FormComponent,
    CardComponent,
    CommentComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
