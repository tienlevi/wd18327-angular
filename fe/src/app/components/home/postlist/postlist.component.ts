import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Spham } from '../../../interface/Spham';
import { Product } from '../../../interface/product';
import { ProductService } from '../../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css',
})
export class PostlistComponent {
  products: Product[] = [];

  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getAllProduct().subscribe((res) => {
      this.products = res;
    });
  }
}
