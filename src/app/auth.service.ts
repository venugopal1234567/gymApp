import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import {Customerdata} from './customerdata';
import { Observable, ReplaySubject } from 'rxjs'
import  'rxjs/operators';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

private customerData=new ReplaySubject<Customerdata>();
customerDataObservable$=this.customerData.asObservable();
  constructor(private  httpClient : HttpClient) { }
  baseUrl:string = " https://jim-maintain.herokuapp.com/customer";
  searchUrl:string="https://jim-maintain.herokuapp.com/customer/search";
  sendCustomerData(data){
    this.customerData.next(data);
  }

  register(a){
    console.log(a);
  }
  login(a){
    console.log(a);
  }
  public  getProducts(): Observable<Customerdata[]> {

    return  this.httpClient
    
    .get(this.baseUrl)
    
    // .map(products  => {
    
    // return  products.map((product) =>  new  Customerdata(product));
    
    // })
    
    // .catch((err)=>{
    
    // console.error(err);
    
    // });
    
    }

    public  search(searchObj:Customerdata): Observable<Customerdata> {

      var out=  this.httpClient    
    .post(this.searchUrl,searchObj)
      console.log(out);
      return out;


      
      // .map(response  => {
      
      // return  new  Customerdata(response);
      
      // })
      
      // .catch((err)=>{
      
      // console.error(err);
      
      // });
      
      }

      public  createProduct(product: Customerdata): Observable<Customerdata> {
        
        var out=  this.httpClient.post(this.baseUrl, product)
        console.log(out)
        return out;
        
        // .map(response  => {
        
        // return  new  Customerdata(response);
        
        // })
        
        // .catch((error)=>{
        
        // console.error(error);
        
        // });
        
        }

        public  updateProduct(product: any): Observable<any> {
          console.log('.................')
          console.log(product)
          return  this.httpClient
          
          .post(this.baseUrl+'/update', product)
          
          // .map(response  => {
          
          // return  new  Customerdata(response);
          
          // })
          
          // .catch((err)=>{
          
          // console.error(err);
          
          // });
          
          }

          public  deleteProductById(productId: number) {

            return  this.httpClient
            
            .delete(this.baseUrl+ '/products/' + productId)
            
            // .catch((e)=>{
            
            // console.error(e);
            
            // });
            
            }
}
