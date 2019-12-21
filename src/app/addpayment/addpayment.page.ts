import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.page.html',
  styleUrls: ['./addpayment.page.scss'],
})
export class AddpaymentPage implements OnInit {
public customerData;
private updatedData
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.authService.customerDataObservable$
    .subscribe(arg => this.customerData = arg);
    console.log(this.customerData)
  }
  backToDashboard(){
    this.router.navigateByUrl('dashboard');
  }
  register(form) {
    this.authService.register(form.value)
    var updateData = {
       "_id" : this.customerData._id,
       "ammountHistoy": form.value
    }
    this.authService.updateProduct(updateData)
    .subscribe(
    
      (newProduct) => {
      
      this.updatedData = newProduct;
      console.log(newProduct);
      
      
      }
      
      );
    //  this.router.navigateByUrl('home');
  
  }
}
