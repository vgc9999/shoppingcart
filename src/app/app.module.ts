import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { ShoppingCartComponent } from './cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './cart/shopping-cart-item.component';
import { ShoppingListComponent } from './cart/shopping-list.component';
import { ServicesService } from './cart/services.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    FilterPipeModule,
    OrderModule,
    FormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
