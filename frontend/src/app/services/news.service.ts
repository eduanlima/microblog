import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  baseUrl = environment.baseUrl; 

  constructor( private http: HttpClient) { }

  create(news: News): Observable<News>{
    return this.http.post<News>(`${this.baseUrl}`, news);
  }
}
