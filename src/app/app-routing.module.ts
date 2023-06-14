import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PostComponent } from './page/post/post.component';
import { NewPostComponent } from './page/new-post/new-post.component';
import { AboutComponent } from './page/about/about.component';

const routes: Routes = [
  {path:'', component:HomeComponent, data: {title: 'Blog Rumos Project'}},
  {path:'post', component:PostComponent, data: {title: 'Blog Rumos Project - Posts'}},
  {path:'newPost', component:NewPostComponent, data: {title: 'Blog Rumos Project - Novo Post'}},
  {path:'contato', component:AboutComponent, data: {title: 'Blog Rumos Project - Contatos'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
