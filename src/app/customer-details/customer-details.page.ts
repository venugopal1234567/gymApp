import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Customerdata } from '../customerdata';
import { Router } from  "@angular/router";
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})
export class CustomerDetailsPage implements OnInit {
  private  customers : Customerdata[] = [];
  constructor(private intract:AuthService,private router:Router) {    
    this.intract.getProducts().subscribe((customers : Customerdata[])=>{

      this.customers = customers.data;
      console.log(this.customers);
      
      });
   }

  ngOnInit() {
  }

  
  
  backToDashboard(){
    this.router.navigateByUrl('dashboard');
  }

}
