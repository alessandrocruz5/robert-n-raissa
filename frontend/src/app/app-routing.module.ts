import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LockScreenComponent } from './components/lock-screen/lock-screen.component';
import { AutoLoginGuard, parentGuard } from './guards/lock-screen.guard';

const routes: Routes = [
  {
    path: 'password',
    component: LockScreenComponent,
    canActivate: [AutoLoginGuard],
    data: { animation: 'LockScreenComponent' },
  },
  { path: '', redirectTo: '/password', pathMatch: 'full' },
  {
    path: 'landing',
    component: LandingComponent,
    data: { animation: 'LandingComponent' },
    canActivate: [parentGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
