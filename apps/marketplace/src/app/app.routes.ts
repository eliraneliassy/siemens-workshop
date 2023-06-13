import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: "full"
  },
  {
    path: 'feed',
    loadComponent: () => import('@siemens/feed').then(m => m.FeedComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('@siemens/cart').then(m => m.CartComponent)
  }
];
