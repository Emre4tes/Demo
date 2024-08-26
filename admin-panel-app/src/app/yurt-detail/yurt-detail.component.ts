import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YurtService } from '../service/yurt.service';

@Component({
  selector: 'app-yurt-detail',
  templateUrl: './yurt-detail.component.html',
  styleUrls: ['./yurt-detail.component.css'],
})
export class YurtDetailComponent implements OnInit {
  yurtId: number | undefined; // Doğru veri tipi
  yurtDetail: any; // Tip belirtebilirsiniz: Yurt

  constructor(
    private route: ActivatedRoute,
    private yurtService: YurtService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.yurtId = +idParam; // ID'yi number'a çeviriyoruz
      this.getYurtDetails();  // Doğru fonksiyon ismi
    }
  }

  getYurtDetails(): void {
    if (this.yurtId !== undefined) {
      this.yurtService.getYurtById(this.yurtId).subscribe((details) => {
        this.yurtDetail = details; // Doğru değişken ismi
      });
    }
  }
}
