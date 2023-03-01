import { Component } from '@angular/core';
import { Order } from './order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  orders:Order[]=[
   
      new Order('ord123','y 81'),
      new Order('ord124','apple14'),
      new Order('ord123','y 81'),
      new Order('ord124','apple14'),
      new Order('ord123','y 81'),
      new Order('ord124','apple14')
  ]
}
