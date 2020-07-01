import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgwWowModule } from 'ngx-wow';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './home/introduction/introduction.component';
import { KnowHowComponent } from './home/know-how/know-how.component';
import { LocationComponent } from './home/location/location.component';
import { LineComponent } from './shared-components/line/line.component';
import { SocialComponent } from './shared-components/social/social.component';
import { SlidingContentComponent } from './shared-components/sliding-content/sliding-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IntroductionComponent,
    KnowHowComponent,
    LocationComponent,
    LineComponent,
    SocialComponent,
    SlidingContentComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
