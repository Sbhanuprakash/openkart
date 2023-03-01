import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openkart';
  selectedLink:string='home';
  selectedproduct:Product;

  onAppheaderClick(sLink:string){
     this.selectedLink=sLink;
  }

     onselectedproduct(product:Product){
      this.selectedproduct=product;

     }
  
}
