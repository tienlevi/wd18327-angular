import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpClient);
  apiURL = 'http://localhost:8080/api/v1/products';

  getAllProduct() {
    return this.http.get<Product[]>(this.apiURL);
  }

  getProductById(id: string | number) {
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }

  addProduct(data: Product) {
    return this.http.post<Product>(this.apiURL, data);
  }

  deleteProduct(id: string | number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  editProduct(id: string | number, data: any) {
    return this.http.put(`${this.apiURL}/${id}`, data);
  }
}
