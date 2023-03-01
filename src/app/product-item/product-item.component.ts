import { Component ,EventEmitter,Input , Output} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  @Input() product:Product;
  @Output() selecteditem = new EventEmitter<null>;
  onitemClicked(){
    this.selecteditem.emit()
  }

}
