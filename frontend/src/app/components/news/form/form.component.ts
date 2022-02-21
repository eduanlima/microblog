import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private news : News = {
    id: 0,
    title: "",
    date: "",
    content: "",
    author: "",
    tags: "",
    comments: []
  };

  formNews! : FormGroup;

  constructor(private formBuilder: FormBuilder, private service: NewsService, private router: Router) { 
    this.configForm();
  }

  ngOnInit(): void {
  }

  configForm(){
    this.formNews = this.formBuilder.group({
      title: [null, Validators.required],
      content: [null, Validators.required],
      author: [null, Validators.required],
      tags: [null, Validators.required]
    });
  }

  validateRequired(input: FormControl){
    return (input.value ? null : { required: true });
  }
  
  create(): void{
    this.setValues();

    this.service.create(this.news).subscribe({
      next: (response) => {
        this.news = response;
        console.log(this.news);
        this.formNews.reset();
      },
      error: (e) => {}
    })
  }

  setValues(): void{
    this.news.title = this.formNews.controls['title'].value;
    this.news.content = this.formNews.controls['content'].value;
    this.news.author = this.formNews.controls['author'].value;
    this.news.tags = this.formNews.controls['tags'].value;
  }

  cancel(): void{
    this.router.navigate(['']);
  }

  setTitle(event : Event){
    this.news.title = (<HTMLInputElement>event.target).value;
  }

  setContent(event: Event){
    this.news.content = (<HTMLInputElement>event.target).value;
  }

  setAuthor(event: Event){
    this.news.author = (<HTMLInputElement>event.target).value;
  }

  setTags(event: Event){
    this.news.tags = (<HTMLInputElement>event.target).value;
  }
}
