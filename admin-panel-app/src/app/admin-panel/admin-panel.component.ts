import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  // Yurtlar ve Öğrenciler kategorilerinin açılıp kapanma durumları için flag'ler
  isYurtlarCollapsed = true;
  isOgrencilerCollapsed = true;

  constructor(private router: Router) {}

  // Toggle fonksiyonları
  toggleYurtlar() {
    this.isYurtlarCollapsed = !this.isYurtlarCollapsed;
  }

  toggleOgrenciler() {
    this.isOgrencilerCollapsed = !this.isOgrencilerCollapsed;
  }

  // Logout fonksiyonu
  logout() {
    // Burada kullanıcıyı oturumdan çıkarmak için gerekli işlemleri yap
    // (örneğin, token'ı temizleme, kullanıcı verilerini sıfırlama vb.)

    // Kullanıcıyı login sayfasına yönlendir
    this.router.navigate(['/login']);
  }
}
