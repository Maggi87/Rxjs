import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombineForkComponent } from './combine-fork/combine-fork.component';
import { ConcatmapComponent } from './concatmap/concatmap.component';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    CombineForkComponent,
    ConcatmapComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
