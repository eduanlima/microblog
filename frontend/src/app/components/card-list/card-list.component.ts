import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() news!: News;

  constructor() { }

  ngOnInit(): void {
  }

}
