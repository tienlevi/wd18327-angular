import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Category from '../../../../interface/category';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-category-add',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './category-add.component.html',
  styleUrl: './category-add.component.css',
})
export class CategoryAddComponent {
  router = inject(Router);
  data: Category = {
    name: '',
  };

  category: Category[] = [];
  categoryService = inject(CategoryService);
  formValidate = inject(FormBuilder);

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  onSubmit() {
    if (this.categoryForm.invalid) return;
    this.categoryService.addCategory(this.data).subscribe(() => {
      this.router.navigate(['/admin/category']);
      alert('Add success');
    });
  }
}
