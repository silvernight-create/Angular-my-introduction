import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HPageComponent } from './h-page/h-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';

import { ListPageComponent } from './list-page/list-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { NavPageComponent } from './nav-page/nav-page.component';
import { BodyPageComponent } from './body-page/body-page.component';
import { NavListComponent } from './list-page/nav-list/nav-list.component';
import { HdListComponent } from './list-page/hd-list/hd-list.component';
import { BodyListComponent } from './list-page/body-list/body-list.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: '', component: BodyPageComponent},
  { path: 'list', component: ListPageComponent} 

];

@NgModule({
  declarations: [
    AppComponent,
    HPageComponent,
    FooterPageComponent,
    BodyPageComponent,

    HeaderPageComponent,
    NavPageComponent,
    ListPageComponent,
    NavListComponent,
    HdListComponent,
    BodyListComponent,
    LoginPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
