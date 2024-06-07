import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);

  authService = inject(AuthService);
  error = '';

  authForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onSubmit() {
    this.authService.SignIn(this.authForm.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
        localStorage.setItem('user', this.authForm.value);
        alert('Đăng nhập thành công');
      },
      error: (error) => {
        if (error.status === 402) {
          this.error = 'email không tồn tại';
        }
        if (error.status === 401) {
          this.error = 'Tài khoản hoặc mật khẩu không chính xác';
        }
      },
    });
  }
}
