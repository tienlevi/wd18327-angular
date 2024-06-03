import { Component, inject } from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import Category from '../../../../interface/category';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categories: Category[] = [];

  categoryService = inject(CategoryService);

  removeCategory(id: number) {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm) {
      this.categoryService.deleteCategory(id).subscribe();
      window.location.reload();
    }
  }
  ngOnInit() {
    this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  }
}
