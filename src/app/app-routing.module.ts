import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: "", component:HomeComponent },
  { path: "home", component:HomeComponent },
  { path: "signup", component:SignupComponent },
  { path: "section1", component:Section1Component },
  { path: "section2", component:Section2Component },
  { path: "section3", component:Section3Component },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
