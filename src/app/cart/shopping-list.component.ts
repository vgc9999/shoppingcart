import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { ServicesService } from './services.service';
import { Item } from './item';
import { CartState } from './cartstate';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  loaded : boolean = true;
  total:number;
   
    private subscription : Subscription;
  item:any[]=[];
  constructor(private _service: ServicesService) { 
   
  }

  ngOnInit() {
      this.subscription = this
      ._service
      .CartState
      .subscribe((state : CartState) => {
          this.item = state.products;
          console.log(this.item);
      });

   
  this._service.total_count.subscribe(
    (total:number)=>{
          this.total = total;
    }
  );
  }

  ngOnDestroy() {
    this
        .subscription
        .unsubscribe();
}

}
