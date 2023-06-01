import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WebsiteDevelopentComponent } from './website-developent/website-developent.component';
import { UxComponent } from './ux/ux.component';
import { WebsiteMaintanceComponent } from './website-maintance/website-maintance.component';
import { ThreeCardsComponent } from './three-cards/three-cards.component';
import { WebApplicationComponent } from './web-application/web-application.component';
import { LogoDesignComponent } from './logo-design/logo-design.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContentWritingComponent } from './content-writing/content-writing.component';
import { PageContactusComponent } from './page-contactus/page-contactus.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    WebsiteDevelopentComponent,
    UxComponent,
    WebsiteMaintanceComponent,
    ThreeCardsComponent,
    WebApplicationComponent,
    LogoDesignComponent,
    ContactUsComponent,
    ContentWritingComponent,
    PageContactusComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
