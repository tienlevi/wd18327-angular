import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../../interface/product';
import { ProductService } from '../../../../services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
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
  form: FormGroup | undefined;
  formValidate = inject(FormBuilder);

  ngOnInit() {
    this.productService
      .getProductById(this.id)
      .subscribe((res: any) => (this.data = res));
  }
}
