import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { Managedirective } from './product-detail/manage.directive';
import { ProductListservice } from './product-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    OrderListComponent,
    ProductItemComponent,
    RegisterFormComponent,
    Managedirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductListservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
