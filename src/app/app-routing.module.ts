import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateAccountComponent } from './components/dashboard/activate-account/activate-account.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ReferralsComponent } from './components/dashboard/referrals/referrals.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'referrals', component: ReferralsComponent },
  { path: 'activate-account', component: ActivateAccountComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
