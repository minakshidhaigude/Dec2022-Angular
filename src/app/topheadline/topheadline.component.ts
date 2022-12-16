import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../tcnewsapi.service';

@Component({
  selector: 'app-topheadline',
  templateUrl: './topheadline.component.html',
  styleUrls: ['./topheadline.component.css'],
})
export class TopheadlineComponent implements OnInit {
  constructor(private svc: TcnewsapiService) {}

  ngOnInit(): void {
    this.gettcNews();
  }
  gettcNews() {
    this.svc.tcHeadlines().subscribe((data) => {
      console.log('tcnewsdata', data);
    });
  }
}
