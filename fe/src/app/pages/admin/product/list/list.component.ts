import { Component, inject } from '@angular/core';
import { Product } from '../../../../interface/product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];

  productService = inject(ProductService);

  removeProduct(id: number) {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm) {
      this.productService
        .deleteProduct(id)
        .subscribe(() => alert('Xóa thành công'));
      window.location.reload();
    }
  }
  ngOnInit() {
    this.productService.getAllProduct().subscribe((res) => {
      this.products = res;
    });
  }

  // ngDoCheck() {
  //   console.log(this.products);
  // }
}
