import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private  router:  Router) { }

  ngOnInit() {
  }
  navigateToCustomerDetails(){
      this.router.navigateByUrl('customer-details');
    
  }
  navigateToAddCustomer(){
    this.router.navigateByUrl('addcustomer');
  
}

navigateToAddHome(){
  this.router.navigateByUrl('home');

}

navigateToSearchCustomer(){
  this.router.navigateByUrl('customer-search');
}


}
