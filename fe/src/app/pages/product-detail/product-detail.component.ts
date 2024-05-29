import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  route = inject(ActivatedRoute);
  data: Product = {
    name: '',
    price: 0,
    image: '',
    desc: '',
    isShow: true,
  };
  router = inject(Router);
  productService = inject(ProductService);
  id = this.route.snapshot.params['id'];

  ngOnInit() {
    this.productService
      .getProductById(this.id)
      .subscribe((res: any) => (this.data = res));
  }
}
