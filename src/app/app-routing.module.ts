import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ActivateAccountComponent } from './components/dashboard/activate-account/activate-account.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { ReferralsComponent } from './components/dashboard/referrals/referrals.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'referrals', component: ReferralsComponent, canActivate: [AuthGuard]},
  { path: 'activate-account', component: ActivateAccountComponent, canActivate: [AuthGuard]},
  { path: '**',  component: PageNotFoundComponent, canActivate: [AuthGuard]},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
