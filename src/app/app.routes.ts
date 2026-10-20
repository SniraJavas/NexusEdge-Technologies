import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', title: 'Nexus Edge Technologies', loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent) },
  { path: 'services', title: 'Services | Nexus Edge', loadComponent: () => import('./pages/services.component').then(m => m.ServicesComponent) },
  { path: 'about', title: 'About & Track Record | Nexus Edge', loadComponent: () => import('./pages/about.component').then(m => m.AboutComponent) },
  { path: 'tenders', title: 'Tenders & Compliance | Nexus Edge', loadComponent: () => import('./pages/tenders.component').then(m => m.TendersComponent) },
  { path: 'contact', title: 'Contact | Nexus Edge', loadComponent: () => import('./pages/contact.component').then(m => m.ContactComponent) },
  // Future: { path: 'portal', canActivate: [authGuard], loadComponent: ... }
  { path: '**', redirectTo: '' }
];
