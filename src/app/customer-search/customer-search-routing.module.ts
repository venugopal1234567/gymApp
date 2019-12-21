import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerSearchPage } from './customer-search.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerSearchPageRoutingModule {}
