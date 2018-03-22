import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import {SessionService} from './services/session.service';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ReqClientComponent } from './req-client/req-client.component';
import { AllServicesComponent } from './all-services/all-services.component';
import { ChatComponent } from './chat/chat.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'req-client', component: ReqClientComponent},
  {path: 'all-services', component: AllServicesComponent},
  {path: 'chat', component: ChatComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    HomeComponent,
    ReqClientComponent,
    AllServicesComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
