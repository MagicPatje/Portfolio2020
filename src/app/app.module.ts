import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ShowcaseService } from './showcase/showcase.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShowcaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
