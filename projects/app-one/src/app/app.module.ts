import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibAModule } from 'projects/lib-a/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibAModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
