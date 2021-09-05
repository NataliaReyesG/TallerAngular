import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "login", component: LoginComponent},
  {path: "news", component: NewsComponent},
  {path: "error404", component: Error404Component},
  {path: "**", redirectTo: '/error404', pathMatch: "full" },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
