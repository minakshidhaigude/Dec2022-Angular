import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TcnewsapiService {
  constructor(private http: HttpClient) {}
  //topheadline api url
  tcnews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=API_KEY';
  tcHeadlines(): Observable<any> {
    return this.http.get(this.tcnews);
  }
}
