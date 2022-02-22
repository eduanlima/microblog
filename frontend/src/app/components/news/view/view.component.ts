import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { Comment } from 'src/app/models/comment';
import { NewsService } from 'src/app/services/news.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  news: News = {
    id: 0,
    title: "",
    date: new Date(),
    content: "",
    author: "",
    tags: "",
    comments: []
  };

  news$!: Observable<News>;

  comment: Comment = {
    id: 0,
    content: "",
    author: "",
    date: new Date()
  };

  formComment!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: NewsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.configForm();
    this.news.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.findById();
  }

  configForm(){
    this.formComment = this.formBuilder.group({
      author: [null, Validators.required],
      content: [null, Validators.required]
    });
  }
  
  createComment(){
    this.setValues();
    this.news$ = this.service.createComment(this.news, this.comment);
    this.formComment.reset();
  }
  
  findById(): void{
    this.news$ = this.service.findById(this.news);
  }

  setValues(): void{
    this.comment.author = this.formComment.controls['author'].value;
    this.comment.content = this.formComment.controls['content'].value;
  }
}
