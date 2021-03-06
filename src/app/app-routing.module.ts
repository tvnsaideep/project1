
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProjectComponent } from './auth/add-project/add-project.component';
import { LoginComponent } from './auth/login/login.component';
import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './shared/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './shared/terms-conditions/terms-conditions.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [

  {path :'home',component:HomeComponent, data: {active: 'home'}},
  {path :'about',component: AboutComponent , data : {active: 'about'}},
  {path : 'contact',component: ContactComponent, data : {active: 'contact'}},
  {path : 'works',component: WorksComponent, data : {active: 'works'}},
  {path: 'privacy-policy',component:PrivacyPolicyComponent},
  {path: 'terms-conditions',component:TermsConditionsComponent},

  {path :'login',component: LoginComponent},
  {path: 'addImages', component : AddProjectComponent },

  {path : '', redirectTo:'home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
