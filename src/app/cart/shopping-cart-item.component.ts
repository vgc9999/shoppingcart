import { Component, OnInit, Input } from '@angular/core';
import { Item } from './item';
import { ServicesService } from './services.service';


@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() product:Item[];

  items:Item[]=[];
  item:Item[];

  
added:boolean;
  constructor(private _service:ServicesService) { }

  AddItem(_product:any){
  
    this.added=true;
    this._service.addItems(_product);
    this._service.addTotal(_product.price);
  
  }

  RemoveItem(_product){
  
    this.added=false;
    this._service.removeItems(_product.id);
    this._service.removeTotal(_product.price);
  }

  ngOnInit() {
  }

}
