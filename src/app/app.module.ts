import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatTooltipModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
