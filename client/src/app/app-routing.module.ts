import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { WriteComponent } from './components/pages/write/write.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { ReadComponent } from './components/pages/read/read.component';
import { Notfound404Component } from './components/pages/notfound404/notfound404.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {
    path: 'about-us',
    component: AboutUsComponent
  }, {
    path: '',
    component: LandingComponent
  }, {
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'write',
    component: WriteComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'read/:id',
    component: ReadComponent,
    canActivate: [AuthGuard]
  }, {
    path: '**',
    component: Notfound404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
