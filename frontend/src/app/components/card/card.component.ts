import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() news!: News;

  constructor() { }

  ngOnInit(): void {
  }
}
