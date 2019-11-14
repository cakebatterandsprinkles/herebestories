import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutUsComponent} from './components/pages/about-us/about-us.component';
import {LandingComponent} from './components/pages/landing/landing.component';
import {SignupComponent} from './components/pages/signup/signup.component';
import {LoginComponent} from './components/pages/login/login.component';

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
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
