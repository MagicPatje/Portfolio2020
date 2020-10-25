import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { HomeComponent } from './home/home.component';
import { ShowcaseDetailComponent } from './showcase/showcase-detail/showcase-detail.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './about/skills/skills.component';

import { TruncatePipe } from './shared/truncate.pipe';

import { ShowcaseService } from './showcase/showcase.service';
import { SkillsService } from './about/skills/skills.service';


@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    HomeComponent,
    ShowcaseDetailComponent,
    TruncatePipe,
    AboutComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ShowcaseService, SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
