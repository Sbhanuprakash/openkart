import { Component, EventEmitter, Output } from '@angular/core';
import { ProductListservice } from '../product-list.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products:Product[];

   @Output() productselectedparent= new EventEmitter<Product>
    
    

    constructor(private productlistservice :ProductListservice){

    }
    
    ngOnInit(){
      this.products=this.productlistservice.getproducts();
    }


  onitemselected(product:Product){
    this.productselectedparent.emit(product);
  }
}
