import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app-router.module'

import { AppComponent } from './app.component';
import { EditionDetailComponent } from './edition-detail.component';
import { EditionService } from "./edition.service";
import { HttpModule } from "@angular/http";
import { EditionListComponent } from "./edition-list.component";
import { HomeComponent } from "./home.component";
import { EditionComponent } from "./edition.component";
import { SplitPipe } from "./pipes/split.pipe";
import { WhoAreUsComponent } from "./who-are-us.component";
import { ContactComponent } from "./contact.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditionComponent,
    EditionDetailComponent,
    EditionListComponent,
    SplitPipe,
    WhoAreUsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpModule,
  ],
  providers: [
    EditionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
