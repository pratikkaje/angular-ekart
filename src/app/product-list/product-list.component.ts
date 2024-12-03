import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  itemCount: number = 0;
  product = {
    name: 'iPhone 13 PRO Max',
    price: 999,
    color: "Red",
    discount: 8.5,
    instock: 10,
    pImage: "/assets/images/iPhone.jpg"
  }

  getDiscountedPrice(){
    return (this.product.price - (this.product.price * this.product.discount/100))
  }

  incrementCartValue(){
    if(this.itemCount < this.product.instock){
      this.itemCount++;
    }
  }

  decrementCartValue(){
    if(this.itemCount > 0){
      this.itemCount--;
    }
  }
}
