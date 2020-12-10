import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { WelcomeSlideComponent } from './welcome-slide/welcome-slide.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import {
  FormsModule
} from '@angular/forms';




@NgModule({
  declarations: [FooterComponent, HeaderComponent, WhatWeDoComponent, WelcomeSlideComponent, WhatsappComponent, PrivacyPolicyComponent, TermsConditionsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WhatWeDoComponent,
    WelcomeSlideComponent,
    WhatsappComponent
  ]
})
export class SharedModule { }
