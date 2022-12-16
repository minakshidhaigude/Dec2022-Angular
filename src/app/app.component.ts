import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'newsapp';
  articals!: Article[];
  constructor() {
    this.articals = [
      new Article(
        'Angular tutorial',
        'https://www.youtube.com/c/testycodeiz',
        5
      ),
      new Article(
        'NodeJS tutorial',
        'https://www.youtube.com/c/testycodeiz',
        4
      ),
      new Article(
        'MongoDB tutorial',
        'https://www.youtube.com/c/testycodeiz',
        3
      ),
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(title.value, link.value);
    this.articals.push(new Article(title.value, link.value));
    //reset the values
    title.value = '';
    link.value = '';
  }
  storeData(): Article[] {
    return this.articals.sort((a: Article, b: Article) => {
      return b.votes - a.votes;
    });
  }
}
