import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: News[] = [];
  listAux: News[] = [];

  constructor(private formBuilder: FormBuilder, private service: NewsService) { }

  ngOnInit(): void {    
    this. findAll();
  }

  findAll(): void{
    this.service.findAll(false).subscribe({
      next: (response) => {
        this.list = response['content'];
        this.listAux = this.list;
      },
      error: (e) => {}
    })
  }

  searchNews(event: Event): void{
    let search = (<HTMLInputElement>event.target).value;
    let listSearch!: News[];

    if(search.length > 3){
      listSearch = this.list.filter((news) => {
        return news.title.substring(0, search.length).toUpperCase() == search.toUpperCase();
      });

      this.list = listSearch.length != 0 ? listSearch : this.listAux;
    }
    else{
      this.list = this.list.length != this.listAux.length ? this.listAux : this.list;
    }
  }
}
