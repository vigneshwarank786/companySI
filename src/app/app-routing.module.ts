import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { UxComponent } from './ux/ux.component';
import { WebsiteMaintanceComponent } from './website-maintance/website-maintance.component';
import { WebApplicationComponent } from './web-application/web-application.component';
import { LogoDesignComponent } from './logo-design/logo-design.component';
import { ContentWritingComponent } from './content-writing/content-writing.component';
import { WebsiteDevelopentComponent } from './website-developent/website-developent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'web-maintenance', component: WebsiteMaintanceComponent },
  { path: 'web-application', component: WebApplicationComponent },
  { path: 'logo-design', component: LogoDesignComponent },
  { path: 'seo-content', component: ContentWritingComponent }, // Assuming you have an SEOContentComponent
  { path: 'ui-ux', component: UxComponent },
  { path: 'web-development', component: WebsiteDevelopentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }