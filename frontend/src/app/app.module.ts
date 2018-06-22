import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Forminput1Component } from './forminput1/forminput1.component';
import { Forminput2Component } from './forminput2/forminput2.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {HttpModule} from '@angular/http'
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    Forminput1Component,
    Forminput2Component,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
