import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interface/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  products: any = [];
  value = new URLSearchParams(window.location.search);

  paramName: any = this.value.get('q');

  productService = inject(ProductService);
  filteredItems = this.products.filter((item: any) => {
    return item.name.toLowerCase().includes(this.paramName.toLowerCase());
  });
  ngOnInit() {
    this.productService.getAllProduct().subscribe((res) => {
      this.filteredItems = res;
      this.products = res;
    });
  }
}
