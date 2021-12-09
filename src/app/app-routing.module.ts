import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PostsComponent } from './Components/posts/posts.component';

const routes: Routes = [

  { path: 'home', component:  HomeComponent },
  { path: 'posts', component:  PostsComponent },

  // Redirects to home whenever any non-matching route is found, has to be last
  { path: '**', redirectTo: '/home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
