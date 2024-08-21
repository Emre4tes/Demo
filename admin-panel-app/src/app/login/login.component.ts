import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    console.log('Login attempt:', { username: this.username, password: this.password });

    // 'withCredentials' seçeneğini ekledik
    this.http.post<{ message: string, token: string }>(
      'http://localhost:3000/login',
      { username: this.username, password: this.password },
      { withCredentials: true }  // Credentials bilgileri (örneğin çerezler) iletilecek
    ).subscribe({
      next: response => {
        console.log('Server response:', response);
        if (response.message === 'Login successful') {
          // Başarılı login'de token'ı saklayabilirsiniz
          localStorage.setItem('token', response.token);
          this.router.navigate(['/admin']).catch(err => {
            console.error('Navigation error:', err);
          });
        } else {
          this.loginError = 'Invalid credentials';
        }
      },
      error: (error) => {
        console.error('Login error:', error);
        this.loginError = 'Invalid credentials';  // Hata mesajını kullanıcıya göster
      }
    });
  }
}
