import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';



const routes: Routes = [
  { path: "", component: MoviesComponent },
  { path: "movieDetail", component: MovieDetailComponent },
  { path: "login", component: LoginComponent },
  { path: "profile", component: ProfileComponent },
  { path: "signup", component: SignupComponent },
  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
