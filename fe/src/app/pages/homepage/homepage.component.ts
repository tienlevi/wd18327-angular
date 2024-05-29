import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/home/header/header.component';
import { PostlistComponent } from '../../components/home/postlist/postlist.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, PostlistComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  products: Product[] = [];

  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getAllProduct().subscribe((res) => {
      this.products = res;
    });
  }
}
