import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Category from '../interface/category';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  http = inject(HttpClient);
  apiURL = 'http://localhost:8080/api/v1/category';

  getAllCategories() {
    return this.http.get<Category[]>(this.apiURL);
  }

  getCategoryById(id: string | number) {
    return this.http.get<Category>(`${this.apiURL}/${id}`);
  }

  addCategory(data: Category) {
    return this.http.post<Category>(this.apiURL, data);
  }

  deleteCategory(id: string | number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  editCategory(id: string | number, data: any) {
    return this.http.put(`${this.apiURL}/${id}`, data);
  }
}
