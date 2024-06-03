import { Routes } from '@angular/router';
import { Bai3Component } from './pages/bai3/bai3.component';
import { Bai4Component } from './pages/bai4/bai4.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserlayoutComponent } from './layout/userlayout/userlayout.component';
import { Bai2Component } from './pages/bai2/bai2.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { ProductListComponent } from './pages/admin/product/list/list.component';
import { ProductAddComponent } from './pages/admin/product/add/add.component';
import { ProductEditComponent } from './pages/admin/product/edit/edit.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserComponent } from './pages/admin/user/user.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { DetailComponent } from './pages/admin/product/detail/detail.component';
import { CategoryComponent } from './pages/admin/category/list/category.component';
import { CategoryAddComponent } from './pages/admin/category/category-add/category-add.component';
import { CategoryEditComponent } from './pages/admin/category/category-edit/category-edit.component';

export const routes: Routes = [
  {
    path: '',
    component: UserlayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'bai2', component: Bai2Component },
      { path: 'bai3', component: Bai3Component },
      { path: 'bai4', component: Bai4Component },
      { path: 'search', component: SearchComponent },
      { path: 'detail/:id', component: ProductDetailComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminlayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user', component: UserComponent },
      { path: 'list', component: ProductListComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category/add', component: CategoryAddComponent },
      { path: 'category/edit/:id', component: CategoryEditComponent },
      { path: 'add', component: ProductAddComponent },
      { path: 'edit/:id', component: ProductEditComponent },
      { path: 'detail/:id', component: DetailComponent },
    ],
  },
];
