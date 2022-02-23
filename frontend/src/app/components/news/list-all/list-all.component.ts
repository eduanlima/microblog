import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  list: News[] = [];

  constructor(private service: NewsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll(false).subscribe({
      next: (response) => {
        this.list = response["content"];
      },
      error: (e) => {
        console.log(e);
      } 
    });
  }
}
