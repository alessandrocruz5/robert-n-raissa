import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { RegistryComponent } from './components/registry/registry.component';
import { LocationComponent } from './components/location/location.component';
import { LandingComponent } from './components/landing/landing.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
// import { DressCodeComponent } from './components/dress-code/dress-code.component';
// import { EntourageComponent } from './components/entourage/entourage.component';

const routes: Routes = [
  { path: '', redirectTo: '/password', pathMatch: 'full' },
  {
    path: 'landing',
    component: LandingComponent,
    data: { animation: 'LandingComponent' },
  },
  {
    path: 'password',
    component: LockScreenComponent,
    data: { animation: 'LockScreenComponent' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
