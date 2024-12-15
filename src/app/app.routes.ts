import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HandgunsComponent } from './components/handguns/handguns.component';
import { RiflesComponent } from './components/rifles/rifles.component';
import { ShotgunsComponent } from './components/shotguns/shotguns.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'firearms/handguns',
    component: HandgunsComponent,
  },
  {
    path: 'firearms/rifles',
    component: RiflesComponent,
  },
  {
    path: 'firearms/shotguns',
    component: ShotgunsComponent,
  },
];
