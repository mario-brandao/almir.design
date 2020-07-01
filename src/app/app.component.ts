import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgwWowService } from 'ngx-wow';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public routeClass = '';

  public subscriptions = new Subscription();

  constructor(private router: Router, private wowService: NgwWowService) {
    const routerEventsSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.wowService.init();
      }
    });
    this.subscriptions.add(routerEventsSubscription);
  }

}
