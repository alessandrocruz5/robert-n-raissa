import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './components/footer/footer.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { RegistryComponent } from './components/registry/registry.component';
import { LocationComponent } from './components/location/location.component';
import { DressCodeComponent } from './components/dress-code/dress-code.component';
import { EntourageComponent } from './components/entourage/entourage.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'entourage', component: EntourageComponent },
  { path: 'dress-code', component: DressCodeComponent },
  { path: 'location', component: LocationComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'rsvp-form', component: RsvpComponent },
  { path: 'contact', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
