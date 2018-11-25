import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

import { AgmCoreModule } from '@agm/core';

import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddmarkerComponent} from './addmarker/addmarker.component';
import {UserComponent} from './user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {DirectiveAst} from '@angular/compiler';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'addmarker', component: AddmarkerComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user', component: UserComponent}

]



@NgModule({
  declarations: [
    AppComponent,
    AddmarkerComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvrEkqX0VNaEY3TUNU2CQA6TsqTeeAhjk'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

