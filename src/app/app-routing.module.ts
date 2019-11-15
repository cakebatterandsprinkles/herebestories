import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutUsComponent} from './components/pages/about-us/about-us.component';
import {LandingComponent} from './components/pages/landing/landing.component';
import {SignupComponent} from './components/pages/signup/signup.component';
import {LoginComponent} from './components/pages/login/login.component';
import {DashboardComponent} from './components/pages/dashboard/dashboard.component';
import {WriteComponent} from './components/pages/write/write.component';
import {ProfileComponent} from './components/pages/profile/profile.component';
import {SettingsComponent} from './components/pages/settings/settings.component';
import {ReadComponent} from './components/pages/read/read.component';

const routes : Routes = [
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
        component: DashboardComponent
    }, {
        path: 'write',
        component: WriteComponent
    }, {
        path: 'profile',
        component: ProfileComponent
    }, {
        path: 'settings',
        component: SettingsComponent
    }, {
        path: 'read',
        component: ReadComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
