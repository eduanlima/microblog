import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment = {
    id: 0,
    content: "",
    author: "",
    date: new Date()
  };

  constructor() { }

  ngOnInit(): void {
  }
}
