import { Component, inject } from '@angular/core';
import { Product } from '../../../../interface/product';
import { ProductService } from '../../../../services/product.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import Category from '../../../../interface/category';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, NgIf, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class ProductEditComponent {
  route = inject(ActivatedRoute);
  data: Product = {
    name: '',
    price: 0,
    image: '',
    desc: '',
    isShow: true,
  };
  router = inject(Router);
  category: Category[] = [];
  productService = inject(ProductService);
  categoryService = inject(CategoryService);
  id = this.route.snapshot.params['id'];
  formValidate = inject(FormBuilder);

  productForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.productService
      .getProductById(this.id)
      .subscribe((res: any) => (this.data = res));
    this.categoryService.getAllCategories().subscribe((res) => {
      this.category = res;
    });
  }

  onSubmit() {
    if (this.productForm.invalid) return;
    this.productService.editProduct(this.id, this.data).subscribe(() => {
      this.router.navigate(['/admin/list']);
      alert('Edit success');
    });
  }
}
