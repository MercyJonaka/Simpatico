import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './../home/home.component';
import {AboutComponent} from './../about/about.component';
import {GalleryComponent} from './../gallery/gallery.component';
import {AuthGuardService} from './../auth/auth-guard.service';
import {PageNotFoundComponent} from './../page-not-found/page-not-found.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', canActivate: [AuthGuardService], component: GalleryComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
