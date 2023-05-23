import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { WebsiteDevelopentComponent } from './website-developent/website-developent.component';
import { UxComponent } from './ux/ux.component';
import { WebsiteMaintanceComponent } from './website-maintance/website-maintance.component';
import { ThreeCardsComponent } from './three-cards/three-cards.component';
import { WebApplicationComponent } from './web-application/web-application.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    EnquiryComponent,
    WebsiteDevelopentComponent,
    UxComponent,
    WebsiteMaintanceComponent,
    ThreeCardsComponent,
    WebApplicationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
