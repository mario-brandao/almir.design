import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliding-content',
  templateUrl: './sliding-content.component.html',
  styleUrls: ['./sliding-content.component.scss']
})
export class SlidingContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getLineDelay(i: number) {
    return `.${i *  0.6}s`;
  }

}
