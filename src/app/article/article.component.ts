import { Component, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  //articals!: Article[];
  @Input() artical!: Article;
  constructor() {
    // this.articals = [
    //   new Article(
    //     'Angular tutorial',
    //     'https://www.youtube.com/c/testycodeiz',
    //     5
    //   ),
    //   new Article(
    //     'NodeJS tutorial',
    //     'https://www.youtube.com/c/testycodeiz',
    //     4
    //   ),
    //   new Article(
    //     'MongoDB tutorial',
    //     'https://www.youtube.com/c/testycodeiz',
    //     3
    //   ),
    // ];
  }
  vote_Up() {
    this.artical.voteUp();
  }
  vote_Down() {
    this.artical.voteDown();
  }
  ngOnInit(): void {}
}
