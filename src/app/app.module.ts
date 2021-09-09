import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarHomepageComponent } from './components/navbar-homepage/navbar-homepage.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { FooterDashboardComponent } from './components/dashboard/footer-dashboard/footer-dashboard.component';
import { ReferralsComponent } from './components/dashboard/referrals/referrals.component';
import { ActivateAccountComponent } from './components/dashboard/activate-account/activate-account.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    FooterComponent,
    NavbarHomepageComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterDashboardComponent,
    ReferralsComponent,
    ActivateAccountComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass :'toast-top-right',
      timeOut:3000
    })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
