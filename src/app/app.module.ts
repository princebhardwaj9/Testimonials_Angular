import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FirstsectionComponent } from './firstsection/firstsection.component';
import { FeedbackviewComponent } from './feedbackview/feedbackview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstsectionComponent,
    FeedbackviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
