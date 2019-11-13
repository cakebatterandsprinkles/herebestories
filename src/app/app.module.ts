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

@NgModule({
  declarations: [
    AppComponent,
    NavbarBaseComponent,
    NavbarLandingLinksComponent,
    LandingContentComponent,
    LoaderComponent,
    TextEditorComponent
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
