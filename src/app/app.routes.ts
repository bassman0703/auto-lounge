
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./pages/services/services').then((m) => m.ServicesPage),
  },
  // {
  //   path: 'services/ceramic-coating',
  //   loadComponent: () =>
  //     import('./pages/services/services').then((m) => m.ServicesPage),
  // },
  // {
  //   path: 'projects',
  //   loadComponent: () =>
  //     import('./pages/projects/projects').then((m) => m.ProjectsPage),
  // },
  // {
  //   path: 'projects/:slug',
  //   loadComponent: () =>
  //     import('./pages/project-detail/project-detail').then(
  //       (m) => m.ProjectDetailPage,
  //     ),
  // },
  // {
  //   path: 'journal',
  //   loadComponent: () =>
  //     import('./pages/journal/journal').then((m) => m.JournalPage),
  // },
  // {
  //   path: 'journal/:slug',
  //   loadComponent: () =>
  //     import('./pages/article/article').then((m) => m.ArticlePage),
  // },
  // {
  //   path: 'about',
  //   loadComponent: () =>
  //     import('./pages/about/about').then((m) => m.AboutPage),
  // },
  // {
  //   path: 'contact',
  //   loadComponent: () =>
  //     import('./pages/contact/contact').then((m) => m.ContactPage),
  // },
  {
    path: '**',
    redirectTo: '',
  },
];
