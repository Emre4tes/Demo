import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
  selectedYurtId: string | null = null;
  yurtlar = [
    { id: '1', name: 'Yediveren Yükseköğretim Erkek Öğrenci Yurdu'},
    { id: '2', name: 'Akif Emre Yükseköğretim Erkek Öğrenci Yurdu'},
    { id: '2', name: 'Aksa Yükseköğretim Kız Öğrenci Yurdu' },
    { id: '4', name: ' Alanya Yükseköğretim Kız Öğrenci Yurdu'},
    { id: '5', name: 'Efeler Yükseköğretim Erkek Öğrenci Yurdu'},
    { id: '6', name: ' Bolu Yükseköğretim Kız Öğrenci Yurdu'},
    { id: '7', name: 'Ramazan Karaalp Yükseköğretim Kız Öğrenci Yurdu' },
    { id: '8', name: 'Kayapınar Yükseköğretim Erkek Öğrenci Yurdu'},
    { id: '9', name: 'Erzincan Yükseköğretim Kız Öğrenci Yurdu' },
    { id: '10', name: 'Atatürk Üniversitesi Süheyla Sıtkı Alp Yükseköğretim Kız Öğrenci Yurdu' },
    { id: '11', name: 'Isparta Yükseköğretim Erkek Öğrenci Yurdu'},
    { id: '12', name: ' Prof. Dr. Ahmet Haluk Dursun Yükseköğretim Erkek Öğrenci Yurdu'},
    { id: '13', name: 'Maltepe Yükseköğretim Kız Öğrenci Yurdu'},
    { id: '14', name: 'Ihlamurkuyu Yükseköğretim Kız Öğrenci Yurdu'},
    { id: '15', name: 'Metin Yüksel Yükseköğretim Erkek Öğrenci Yurdu'},
    { id: '16', name: 'Mehmet Akif Ersoy Yükseköğretim Erkek Öğrenci Yurdu'},
    { id: '17', name: 'Bakırköy Yükseköğretim Kız Öğrenci Yurdu'},
    { id: '18', name: 'Bahçelievler Yükseköğretim Kız Öğrenci Yurdu'},
    { id: '19', name: 'Bahçelievler Yükseköğretim Kız Öğrenci Yurdu'},
    { id: '20', name: 'Şehit Bahattin Yıldız Yükseköğretim Erkek Öğrenci Yurdu'},
    { id: '21', name: ' Nevres Ongun Yükseköğretim Erkek Öğrenci Yurdu' },
    { id: '22', name: 'Medeniyet Yükseköğretim Erkek Öğrenci Yurdu'},
    { id: '23', name: 'Vefa Yükseköğretim Kız Öğrenci Yurdu'},
    { id: '24', name: 'Mavera Yükseköğretim Kız Öğrenci Yurdu'},
    { id: '25', name: 'Vera Yükseköğretim Kız Öğrenci Yurdu'},
    { id: '26', name: 'Diriliş Yükseköğretim Erkek Öğrenci Yurdu'},
  ];

  selectYurt(yurtId: string) {
    this.selectedYurtId = yurtId;
  }

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

  goToYurtDetail(id: number): void {
    this.router.navigate([`/yurtlar/${id}`]);
  }

  // Logout fonksiyonu
  logout() {
    // Burada kullanıcıyı oturumdan çıkarmak için gerekli işlemleri yap
    // (örneğin, token'ı temizleme, kullanıcı verilerini sıfırlama vb.)

    // Kullanıcıyı login sayfasına yönlendir
    this.router.navigate(['/login']);
  }
}
