import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibBModule } from 'projects/lib-b/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
