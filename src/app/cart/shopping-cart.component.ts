import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products:any[];
  userFilter: any = { name: '' };
  order: string = 'name';
  ordervalue = false;
  ordervaluedesc = false;
  asc;
  desc;

orderfun(eve){
  console.log(eve.target.value);
  if(eve.target.value == 'asc'){
    this.ordervalue =true;
    this.ordervaluedesc =false;
    
  }
  else if(eve.target.value == 'desc'){
    this.ordervaluedesc =true;
    this.ordervalue =true;
  }
  else{
    this.ordervaluedesc =false;
    this.ordervalue =false;
  }

  
}
  constructor() { 
    this.products= [
      {
        id: 1,
        name: 'United Color beniton',
        price: 499.99,
        currency: 'Rs',
        image: 'images/01.jpg',
        url: 'https://static2.jassets.com/p/Puma-917-Mid-2.0-Ind.-Blue-Sneakers-4118-935263-1-product2.jpg'
      },
      {
        id: 2,
        name: 'Adidas sports shoes',
        price: 249.99,
        currency: 'Rs',
        image: 'images/02.jpg',
        url: 'http://scene7.zumiez.com/is/image/zumiez/pdp_hero/adidas-Flashback-White-%26-Black-Shoes-_272010-front-US.jpg'
      },
      {
        id: 3,
        name: 'Adidas',
        price: 239.99,
        currency: 'Rs',
        image: 'images/04.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/810h11HFM3L._UY395_.jpg'
      },
      {
        id: 4,
        name: 'PUMA sports ',
        price: 119.99,
        currency: 'Rs',
        image: 'images/06.jpg',
        url: 'http://assets.myntassets.com/assets/images/1920391/2017/6/8/11496905404701-Adidas-Men-Sports-Shoes-3121496905404588-5.jpg'
      },
      {
        id: 5,
        name: 'puma track',
        price: 599.99,
        currency: 'Rs',
        image: 'images/05.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81t38mrch6L._UL1500_.jpg'
      },
      {
        id: 6,
        name: 'Adidas track',
        price: 149.99,
        currency: 'Rs',
        image: 'images/03.jpg',
        url: 'https://cdn.shopclues.com/images/thumbnails/37609/320/320/INDUSNBLREDb14634988211480324580.jpg'
      },
       {
        id: 7,
        name: 'United Color beniton',
        price: 499.99,
        currency: 'EUR',
        image: 'images/01.jpg',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81t38mrch6L._UL1500_.jpg'
      }
    ];
  }

  ngOnInit() {
  }

}
