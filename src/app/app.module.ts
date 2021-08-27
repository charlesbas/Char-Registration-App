import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterListComponent } from './components/register-list/register-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegFormComponent } from './components/reg-form/reg-form.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';


const appRoutes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'registered-users', component: RegisterListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    RegisterComponent,
    RegisterListComponent,
    RegFormComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    OrderModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
