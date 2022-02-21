import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: News[] = [];

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this. findAll();
  }

  findAll(): void{
    this.service.findAll(false).subscribe({
      next: (response) => {
        this.list = response['content'];
      },
      error: (e) => {}
    })
  }
}
