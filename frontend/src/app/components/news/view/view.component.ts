import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { Comment } from 'src/app/models/comment';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  news : News = {
    id: 0,
    title: "",
    date: "",
    content: "",
    author: "",
    tags: "",
    comments: []
  };

  comment: Comment = {
    id: 0,
    content: "",
    author: "",
    date: ""
  };

  comments: Comment[] = [];

  constructor(private service: NewsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.news.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.findById();
  }

  findById(): void{
    this.service.findById(this.news).subscribe({
      next: (response) => {
        this.news = response;
        this.comments = response["comments"];
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  formatDate(date: String): String{
    return `${date.substring(8, 10)}/${date.substring(5, 7)}/${date.substring(0, 4)}`;
  }
}
