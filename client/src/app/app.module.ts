import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';

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
    MainWritingContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }