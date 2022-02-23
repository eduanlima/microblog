import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  news : News = {
    id: 0,
    title: "",
    date: new Date(),
    content: "",
    author: "",
    tags: "",
    comments: []
  };

  formNews! : FormGroup;

  constructor(private formBuilder: FormBuilder, private service: NewsService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.configForm();
  }

  ngOnInit(): void {
    this.news.id = this.activatedRoute.snapshot.paramMap.get("id")!;
    this.checkDoUpdate();
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

  setValues(): void{
    this.news.title = this.formNews.controls['title'].value;
    this.news.content = this.formNews.controls['content'].value;
    this.news.author = this.formNews.controls['author'].value;
    this.news.tags = this.formNews.controls['tags'].value;
  }

  fillFields(): void{
    this.formNews.controls['title'].setValue(this.news.title);
    this.formNews.controls['content'].setValue(this.news.content);
    this.formNews.controls['author'].setValue(this.news.author);
    this.formNews.controls['tags'].setValue(this.news.tags); 
  }

  findById(): void{
    this.service.findById(this.news).subscribe({
      next: (response) => {
        this.news = response;
        this.fillFields();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
  
  private create(): void{
    this.setValues();

    this.service.create(this.news).subscribe({
      next: (response) => {
        this.news = response;
        this.formNews.reset();
        this.router.navigate(["listallnews"]);
      },
      error: (e) => {}
    })
  }

  private update(): void{
    this.service.update(this.news).subscribe({
      next: () => {
        this.formNews.reset();
        this.router.navigate(["listallnews"]);
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  checkDoUpdate(): void{
    if (this.news.id != 0){
      this.findById();
    }
  }

  save(): void{
    if(this.news.id != 0){
      this.update();
    }
    else{
      this.create();
    }
  }

  cancel(): void{
    this.router.navigate(['listallnews']);
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
