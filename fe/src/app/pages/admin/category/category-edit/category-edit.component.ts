import { CommonModule, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Category from '../../../../interface/category';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css',
})
export class CategoryEditComponent {
  route = inject(ActivatedRoute);
  data: Category = {
    name: '',
  };
  router = inject(Router);
  categoryService = inject(CategoryService);
  id = this.route.snapshot.params['id'];
  formValidate = inject(FormBuilder);

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.categoryService
      .getCategoryById(this.id)
      .subscribe((res: any) => (this.data = res));
  }

  onSubmit() {
    if (this.categoryForm.invalid) return;
    this.categoryService.editCategory(this.id, this.data).subscribe(() => {
      this.router.navigate(['/admin/category']);
      alert('Edit success');
    });
  }
}
