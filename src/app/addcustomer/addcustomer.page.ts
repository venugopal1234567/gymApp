import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';
import { Customerdata } from '../customerdata';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {
  products: any;

  constructor(private  authService:  AuthService, private  router:  Router) { }

  ngOnInit() {
  }
  register(form) {
    //this.authService.register(form.value)
      
    this.authService
    
    .createProduct(form.value)
    
    .subscribe(
    
    (newProduct) => {
    
    this.products = newProduct;
    console.log(newProduct);
    
    
    }
    
    );
    this.router.navigateByUrl('customer-details');
  
  }
  backToDashboard(){
    this.router.navigateByUrl('dashboard');
  }
 

}
