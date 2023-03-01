import { Product } from "./product.model";


export class ProductListservice{
     
    getproducts(){
        return this.products.slice();
    }



    products:Product[]=[
        new Product(
        'Y 81',
        'vivo mobile with best camera features',
        'https://fdn2.gsmarena.com/vv/bigpic/vivo-y81.jpg',
        15000.00,
        'vivo'),
       
        new Product(
      'APPLE 14',
      'experience the brand of apple & apple mac',
      'https://m.media-amazon.com/images/I/610pghkO81L._SL1500_.jpg',
      60000.00,
      'APPLE'),
      
      new Product(
        'Y 81',
        'vivo mobile with best camera features',
        'https://fdn2.gsmarena.com/vv/bigpic/vivo-y81.jpg',
        15000.00,
        'vivo'),
       
        new Product(
      'APPLE 14',
      'experience the brand of apple & apple mac',
      'https://m.media-amazon.com/images/I/610pghkO81L._SL1500_.jpg',
      60000.00,
      'APPLE')
    ]
}