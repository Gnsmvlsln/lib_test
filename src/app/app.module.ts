import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DesignModule } from 'design';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
