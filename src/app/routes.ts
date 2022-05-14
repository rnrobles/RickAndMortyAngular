import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./starter/starter.module').then((m) => m.StarterModule),
  },
  {
    path: 'starter',
    loadChildren: () =>
      import('./starter/starter.module').then((m) => m.StarterModule),
  },

  { path: '', redirectTo: '/', pathMatch: 'full' },
];
