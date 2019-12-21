import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then( m => m.FeaturesPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'customer-details',
    loadChildren: () => import('./customer-details/customer-details.module').then( m => m.CustomerDetailsPageModule)
  },
  {
    path: 'addcustomer',
    loadChildren: () => import('./addcustomer/addcustomer.module').then( m => m.AddcustomerPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'customer-search',
    loadChildren: () => import('./customer-search/customer-search.module').then( m => m.CustomerSearchPageModule)
  },
  {
    path: 'addpayment',
    loadChildren: () => import('./addpayment/addpayment.module').then( m => m.AddpaymentPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
