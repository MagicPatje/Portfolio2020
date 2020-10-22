import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseComponent } from './showcase/showcase.component';
import { HomeComponent } from './home/home.component';
import { ShowcaseDetailComponent } from './showcase/showcase-detail/showcase-detail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'showcase/:id', component: ShowcaseDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
