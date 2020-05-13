import { Injectable } from '@angular/core';
import { Item } from './item';
import { CartState } from './cartstate';
import {Observable} from 'rxjs';
import { Subject } from 'rxjs';

//import { map } from 'rxjs/operators';
//import { catch } from 'rxjs/operators';
//import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  item:Item[]=[];
  total:number=0;
  
  private cartSubject = new Subject<CartState>();
  total_count = new Subject<number>();
  CartState = this.cartSubject.asObservable();
  

  constructor() { }
  addItems(_product){
    this.item.push(_product);
    console.log(this.item);
    
    this.cartSubject.next(<CartState>{loaded: true, products:  this.item});
   
  }

  removeItems(id:any) {
    this.item = this.item.filter((item) =>  item.id !== id )
    this.cartSubject.next(<CartState>{loaded: false , products:  this.item});
  }

  addTotal(_product:any){

    this.total =this.total+_product;
    console.log("add total:",this.total)
    this.total_count.next(this.total);
  }
  
  removeTotal(_product:any){
    this.total -=_product;
    console.log("remove total:",this.total);
    this.total_count.next(this.total);
    
  }


}
