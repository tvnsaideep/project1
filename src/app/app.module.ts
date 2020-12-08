import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';
//import { AgmCoreModule } from '@agm/core';

// import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBgSRJk-HB5VTV-BDoPAqSLDP_TbuRIAsMng se'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
