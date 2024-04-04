import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'alphabets',
    loadComponent: () => import('./pages/alphabets/alphabets.page').then( m => m.AlphabetsPage)
  },
  {
    path: 'numbers',
    loadComponent: () => import('./pages/numbers/numbers.page').then( m => m.NumbersPage)
  },
  {
    path: 'colors',
    loadComponent: () => import('./pages/colors/colors.page').then( m => m.ColorsPage)
  },
  {
    path: 'animals',
    loadComponent: () => import('./pages/animals/animals.page').then( m => m.AnimalsPage)
  },
  {
    path: 'birds',
    loadComponent: () => import('./pages/birds/birds.page').then( m => m.BirdsPage)
  },
  {
    path: 'objects',
    loadComponent: () => import('./pages/objects/objects.page').then( m => m.ObjectsPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'shapes',
    loadComponent: () => import('./pages/shapes/shapes.page').then( m => m.ShapesPage)
  },
  {
    path: 'leaderboard',
    loadComponent: () => import('./pages/leaderboard/leaderboard.page').then( m => m.LeaderboardPage)
  },
  {
    path: 'games',
    loadComponent: () => import('./pages/games/games.page').then( m => m.GamesPage)
  },
];
