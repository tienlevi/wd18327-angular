import { Component, inject } from '@angular/core';
import { Product } from '../../../../interface/product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../services/product.service';
import { RouterLink } from '@angular/router';
import Category from '../../../../interface/category';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];
  category: Category[] = [];

  productService = inject(ProductService);
  categoryService = inject(CategoryService);

  removeProduct(id: number) {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm) {
      this.productService.deleteProduct(id).subscribe();
      window.location.reload();
    }
  }
  ngOnInit() {
    this.productService.getAllProduct().subscribe((res) => {
      this.products = res;
    });
    this.categoryService.getAllCategories().subscribe((res) => {
      this.category = res;
    });
  }
}
