import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../interface/product';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../services/category.service';
import Category from '../../../../interface/category';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class ProductAddComponent {
  router = inject(Router);
  toggle: boolean = false;
  data: Product = {
    name: '',
    price: 0,
    image: '',
    category: '',
    desc: '',
    isShow: this.toggle,
  };

  category: Category[] = [];
  productService = inject(ProductService);
  categoryService = inject(CategoryService);
  formValidate = inject(FormBuilder);

  productForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(0),
    image: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
    isShow: new FormControl(false),
  });
  onSubmit() {
    if (this.productForm.invalid) return;
    this.productService.addProduct(this.data).subscribe(() => {
      this.router.navigate(['/admin/list']);
      alert('Add success');
    });
  }
  ngOnInit() {
    this.categoryService.getAllCategories().subscribe((res) => {
      this.category = res;
    });
  }
}
