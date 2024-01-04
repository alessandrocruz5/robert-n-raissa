import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { CarouselModule } from 'primeng/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EntourageComponent } from './components/entourage/entourage.component';
import { DressCodeComponent } from './components/dress-code/dress-code.component';
import { LocationComponent } from './components/location/location.component';
import { RegistryComponent } from './components/registry/registry.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './components/landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    EntourageComponent,
    DressCodeComponent,
    LocationComponent,
    RegistryComponent,
    RsvpComponent,
    FooterComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    CarouselModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
