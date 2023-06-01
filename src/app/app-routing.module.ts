import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UxComponent } from './ux/ux.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"contactus",component:ContactUsComponent},
  {path:"UIUX",component:UxComponent},
  // {path:"home",component:HomeComponent},
  // {path:"/home",component:HomeComponent},
  // {path:"/home",component:HomeComponent},
  // {path:"/home",component:HomeComponent},
  // {path:"/home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
