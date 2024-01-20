import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter-handle',
  templateUrl: './twitter-handle.component.html',
  styleUrls: ['./twitter-handle.component.css']
})
export class TwitterHandleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectToTwitter(): void {
    window.open('https://twitter.com/BTCillustrated', '_blank');
  }
}
