import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WelcomeSlideComponent } from './welcome-slide/welcome-slide.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, WhatWeDoComponent, WelcomeSlideComponent, WhatsappComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    WhatWeDoComponent,
    WelcomeSlideComponent,
    WhatsappComponent
  ]
})
export class SharedModule { }
