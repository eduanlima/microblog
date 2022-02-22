import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { News } from '../models/news';
import { Comment } from 'src/app/models/comment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  baseUrl = environment.baseUrl; 

  constructor( private http: HttpClient) { }

  findAll(paged: boolean, page = 0): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}?paged=${paged}&page=${page}&linesPerPage=5&direction=DESC&orderBy=id`);
  }

  findById(news: News): Observable<News>{
    return this.http.get<News>(`${this.baseUrl}/${news.id}`);
  }

  create(news: News): Observable<News>{
    return this.http.post<News>(`${this.baseUrl}`, news);
  }

  createComment(news: News, comment: Comment): Observable<News>{
    return this.http.post<News>(`${this.baseUrl}/${news.id}/comments`, comment);
  }
}
