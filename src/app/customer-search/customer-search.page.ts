import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Customerdata } from '../customerdata';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.page.html',
  styleUrls: ['./customer-search.page.scss'],
})
export class CustomerSearchPage implements OnInit {
  public selectOption:string;
public searchItem;
public length;
  constructor(private authService:AuthService,private router:Router) { 
  
  }

  ngOnInit() {
  }
  login(form){
    this.authService.login(form.value)
    this.authService.search(form.value)
    
    .subscribe(
    
      (newProduct) => {
      
      this.searchItem = newProduct.data;
      this.length=this.searchItem.length;
      console.log(newProduct.data);
      
      
      }
      
      );
  }
  backToDashboard(){
    this.router.navigateByUrl('dashboard');
  }
clickOnList(customerdata){
 this.authService.sendCustomerData(customerdata);
  this.router.navigateByUrl('addpayment');
}
}
