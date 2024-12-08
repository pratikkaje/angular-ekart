import { Component, Input, ViewChild } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  itemCount: number = 0;
  searchText : string = '';

  @ViewChild(ProductListComponent) productListComponent : ProductListComponent;

  setSearchText(value){
    this.searchText = value;
  }

}
