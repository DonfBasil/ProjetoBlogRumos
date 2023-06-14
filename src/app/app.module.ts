import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sharespage/footer/footer.component';
import { NavbarComponent } from './sharespage/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';
import { PostComponent } from './page/post/post.component';
import { NewPostComponent } from './page/new-post/new-post.component';
import { AboutComponent } from './page/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    PostComponent,
    NewPostComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
