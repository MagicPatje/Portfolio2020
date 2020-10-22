import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ShowcaseService } from './showcase/showcase.service';
import { HomeComponent } from './home/home.component';
import { ShowcaseDetailComponent } from './showcase/showcase-detail/showcase-detail.component';
import { TruncatePipe } from './shared/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    HomeComponent,
    ShowcaseDetailComponent,
    TruncatePipe
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
