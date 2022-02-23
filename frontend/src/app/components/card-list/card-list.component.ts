import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';
import { ListAllComponent } from '../news/list-all/list-all.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() news!: News;

  constructor(private service: NewsService, private listAll: ListAllComponent) { }

  ngOnInit(): void {
  }

  delete(id: Number): void{
    this.service.delete(id).subscribe({
      next: () => {
        this.listAll.findAll();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

}
