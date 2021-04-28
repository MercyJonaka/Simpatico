import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppMaterialModule} from './core/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthService}  from './auth/auth.service';
import {FlickrService} from './flickr.service';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PageNotFoundComponent,
    HomeComponent,
    GalleryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientJsonpModule
  ],
  providers: [AuthGuardService,AuthService,FlickrService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
