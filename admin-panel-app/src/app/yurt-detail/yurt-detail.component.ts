import { Component, Input, OnInit } from '@angular/core';
import { YurtService } from '../service/yurt.service';

@Component({
  selector: 'app-yurt-detail',
  templateUrl: './yurt-detail.component.html'
})
export class YurtDetailComponent implements OnInit {
  @Input() yurtId: string | undefined;
  yurtDetail: any;

  constructor(private yurtService: YurtService) {}

  ngOnInit(): void {
    if (this.yurtId) {
      this.yurtService.getYurtDetail(this.yurtId).subscribe(data => {
        this.yurtDetail = data;
      });
    }
  }
}
