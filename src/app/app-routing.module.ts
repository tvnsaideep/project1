
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home/home.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [

  {path :'home',component:HomeComponent, data: {active: 'home'}},
  {path :'about',component: AboutComponent , data : {active: 'about'}},
  {path : 'contact',component: ContactComponent, data : {active: 'contact'}},
  {path : 'works',component: WorksComponent, data : {active: 'works'}},
  {path : '', redirectTo:'home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
