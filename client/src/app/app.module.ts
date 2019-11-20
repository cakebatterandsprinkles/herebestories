import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { CountdownModule } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarBaseComponent } from './components/landing/navbar-base/navbar-base.component';
import { NavbarLandingLinksComponent } from './components/landing/navbar-landing-links/navbar-landing-links.component';
import { LandingContentComponent } from './components/landing/landing-content/landing-content.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TextEditorComponent } from './components/create-story/text-editor/text-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { LandingComponent } from './components/pages/landing/landing.component';
import { AboutUsContentComponent } from './components/landing/about-us-content/about-us-content.component';
import { FooterLandingComponent } from './components/landing/footer-landing/footer-landing.component';
import { SignupFormComponent } from './components/landing/signup-form/signup-form.component';
import { LoginFormComponent } from './components/landing/login-form/login-form.component';
import { SignupComponent } from './components/pages/signup/signup.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MainNavbarComponent } from './components/main/main-navbar/main-navbar.component';
import { MainFooterComponent } from './components/main/main-footer/main-footer.component';
import { MainDashboardGridComponent } from './components/main/main-dashboard-grid/main-dashboard-grid.component';
import { MainProfilePageComponent } from './components/main/main-profile-page/main-profile-page.component';
import { MainSettingsComponent } from './components/main/main-settings/main-settings.component';
import { MainStoryViewComponent } from './components/main/main-story-view/main-story-view.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { ReadComponent } from './components/pages/read/read.component';
import { MainCardComponent } from './components/main/main-card/main-card.component';
import { WriteComponent } from './components/pages/write/write.component';
import { MainWelcomeComponent } from './components/main/main-welcome/main-welcome.component';
import { MainPromptComponent } from './components/main/main-prompt/main-prompt.component';
import { MainChronometerComponent } from './components/main/main-chronometer/main-chronometer.component';
import { MainPaginationComponent } from './components/main/main-pagination/main-pagination.component';
import { MainWritingContentComponent } from './components/main/main-writing-content/main-writing-content.component';
import { MainProfileInfoComponent } from './components/main/main-profile-info/main-profile-info.component';
import { Notfound404Component } from './components/pages/notfound404/notfound404.component';
import { NotFoundContentComponent } from './components/not-found/not-found-content/not-found-content.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarSideComponent } from './components/landing/navbar-side/navbar-side.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { MainNavbarSideComponent } from './components/main/main-navbar-side/main-navbar-side.component';
import { MainReadContentComponent } from './components/main/main-read-content/main-read-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarBaseComponent,
    NavbarLandingLinksComponent,
    LandingContentComponent,
    LoaderComponent,
    TextEditorComponent,
    AboutUsComponent,
    LandingComponent,
    AboutUsContentComponent,
    FooterLandingComponent,
    SignupFormComponent,
    LoginFormComponent,
    SignupComponent,
    LoginComponent,
    MainNavbarComponent,
    MainFooterComponent,
    MainDashboardGridComponent,
    MainProfilePageComponent,
    MainSettingsComponent,
    MainStoryViewComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    ReadComponent,
    MainCardComponent,
    WriteComponent,
    MainWelcomeComponent,
    MainPromptComponent,
    MainChronometerComponent,
    MainPaginationComponent,
    MainWritingContentComponent,
    MainProfileInfoComponent,
    Notfound404Component,
    NotFoundContentComponent,
    NavbarSideComponent,
    MainNavbarSideComponent,
    MainReadContentComponent
  ],
  imports: [
    BrowserModule,
    CountdownModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    NoopAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
