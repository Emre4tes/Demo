import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YurtService } from '../service/yurt.service';

@Component({
  selector: 'app-yurt-detail',
  templateUrl: './yurt-detail.component.html',
  styleUrls: ['./yurt-detail.component.css']
})
export class YurtDetailComponent implements OnInit {
  yurt: any; // Burada uygun veri tipini kullanın
yurtDetail: any;

  constructor(
    private route: ActivatedRoute,
    private yurtService: YurtService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const yurtId = params.get('id');
      if (yurtId) {
        this.yurtService.getYurtDetail(yurtId).subscribe(data => {
          this.yurt = data;
        });
      }
    });
  }
}
