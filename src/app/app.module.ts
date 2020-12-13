import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorksComponent } from './works/works.component';
import { ToastrModule } from 'ngx-toastr';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { FormsModule }   from '@angular/forms';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service'
import { UploadService } from './services/upload.service';
import { DropzoneDirective } from './directives/dropzone.directive';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    WorksComponent,
    DropzoneDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    FormsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgImageSliderModule
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBgSRJk-HB5VTV-BDoPAqSLDP_TbuRIAsMng se'
    // })
  ],
  providers: [DataService,AuthService,UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
