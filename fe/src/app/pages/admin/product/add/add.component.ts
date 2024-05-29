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

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class ProductAddComponent {
  router = inject(Router);
  data: Product = { name: '', price: 0, image: '', desc: '', isShow: true };
  productService = inject(ProductService);
  formValidate = inject(FormBuilder);

  productForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
  });
  onSubmit() {
    if (this.productForm.invalid) return;
    this.productService.addProduct(this.data).subscribe(() => {
      this.router.navigate(['/admin/list']);
      alert('Add success');
    });
  }
}
